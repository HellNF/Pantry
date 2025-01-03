import React from 'react';
import { View, Text, TextInput, Button, ScrollView, TouchableOpacity, Animated, Image } from 'react-native';
import { Plus, Heart, Camera, X } from 'lucide-react-native';
import { styles } from './../styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { CommunityPosts } from '../components/CommunityPosts';
import { useRecipes } from '../contexts/RecipesContext';
import { RecipeTabBar } from '../components/RecipeTabBar';

interface Recipe {
  id: string | number;
  title: string;
  image?: string;
  ingredients: {
    amount: string;
    unit: string;
    name: string;
  }[];
  instructions: string[];
  author?: string;
  likes?: number;
  showDetails?: boolean;
}

interface CommunityPost {
  id: string | number;
  author: {
    name: string;
    avatar?: string;
  };
  content: string;
  recipe?: Recipe;
  likes: number;
  comments: number;
  timestamp: string;
  commentsList: {
    id: number;
    author: {
      name: string;
      avatar?: string;
    };
    content: string;
    timestamp: string;
  }[];
}

export const RecipesScreen = ({  
  communityPosts = []
}: { 
  communityPosts?: CommunityPost[]
}) => {
  const {suggestedRecipes, setSuggestedRecipes} = useRecipes();
  const {userRecipes,setUserRecipes}=useRecipes()

  const [selectedRecipe, setSelectedRecipe] = React.useState<Recipe | null>(null);
  const [isCreatingRecipe, setIsCreatingRecipe] = React.useState(false);
  const [newRecipe, setNewRecipe] = React.useState<Recipe>({
    id: Date.now(),
    title: '',
    ingredients: [],
    instructions: [],
    showDetails: false,
  });
  const [animation] = React.useState(new Animated.Value(0));
  const [activeTab, setActiveTab] = React.useState<'own' | 'community'>('own');

  const handleAddIngredient = () => {
    setNewRecipe(prev => ({
      ...prev,
      ingredients: [...prev.ingredients, { amount: '', unit: '', name: '' }]
    }));
  };

  const handleAddInstruction = () => {
    setNewRecipe(prev => ({
      ...prev,
      instructions: [...prev.instructions, '']
    }));
  };

  const handleSaveRecipe = () => {
    // TODO: Implementare la logica per salvare la ricetta
    console.log('Salvataggio ricetta:', newRecipe);
    setIsCreatingRecipe(false);
    setNewRecipe({
      id: Date.now(),
      title: '',
      ingredients: [],
      instructions: [],
    });
  };

  const toggleRecipe = (recipe: Recipe) => {
    if (selectedRecipe?.id === recipe.id) {
      // Chiudi
      recipe.showDetails = false;
      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start(() => setSelectedRecipe(null));
    } else {
      // Apri
      recipe.showDetails = true;
      setSelectedRecipe(recipe);
      Animated.timing(animation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  const maxHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 500], // Regola questo valore in base alle tue esigenze
  });

  if (isCreatingRecipe) {
    return (
      <ScrollView style={styles.contentContainer}>
        <View style={styles.recipeCard}>
          <View style={styles.headerContainer}>
            <Text style={styles.cardTitle}>Create New Recipe</Text>
            <TouchableOpacity onPress={() => setIsCreatingRecipe(false)}>
              <X size={24} />
            </TouchableOpacity>
          </View>

          <View style={styles.formSection}>
            <Text style={styles.sectionTitle}>Recipe Image</Text>
            <TouchableOpacity style={styles.imageUploadButton}>
              <Camera size={32} color="#666" />
              <Text style={styles.uploadText}>Upload Image</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.formSection}>
            <Text style={styles.sectionTitle}>Recipe Title</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter recipe title"
              value={newRecipe.title}
              onChangeText={(text) => setNewRecipe(prev => ({ ...prev, title: text }))}
            />
          </View>

          <View style={styles.formSection}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Ingredients</Text>
              <TouchableOpacity 
                style={styles.addButton}
                onPress={handleAddIngredient}
              >
                <Text style={styles.addButtonText}>Add Ingredient</Text>
              </TouchableOpacity>
            </View>
            {newRecipe.ingredients.map((ingredient, index) => (
              <View key={index} style={styles.ingredientRow}>
                <TextInput
                  style={[styles.input, styles.smallInput]}
                  placeholder="Amount"
                  value={ingredient.amount}
                  onChangeText={(text) => {
                    const updatedIngredients = [...newRecipe.ingredients];
                    updatedIngredients[index].amount = text;
                    setNewRecipe(prev => ({ ...prev, ingredients: updatedIngredients }));
                  }}
                />
                <TextInput
                  style={[styles.input, styles.smallInput]}
                  placeholder="Unit"
                  value={ingredient.unit}
                  onChangeText={(text) => {
                    const updatedIngredients = [...newRecipe.ingredients];
                    updatedIngredients[index].unit = text;
                    setNewRecipe(prev => ({ ...prev, ingredients: updatedIngredients }));
                  }}
                />
                <TextInput
                  style={[styles.input, styles.largeInput]}
                  placeholder="Ingredient name"
                  value={ingredient.name}
                  onChangeText={(text) => {
                    const updatedIngredients = [...newRecipe.ingredients];
                    updatedIngredients[index].name = text;
                    setNewRecipe(prev => ({ ...prev, ingredients: updatedIngredients }));
                  }}
                />
                <TouchableOpacity onPress={() => {
                  const updatedIngredients = newRecipe.ingredients.filter((_, i) => i !== index);
                  setNewRecipe(prev => ({ ...prev, ingredients: updatedIngredients }));
                }}>
                  <X size={20} />
                </TouchableOpacity>
              </View>
            ))}
          </View>

          <View style={styles.formSection}>
            <Text style={styles.sectionTitle}>Instructions</Text>
            {newRecipe.instructions.map((instruction, index) => (
              <View key={index} style={styles.instructionRow}>
                <TextInput
                  style={[styles.input, styles.largeInput]}
                  placeholder={`Step ${index + 1}`}
                  value={instruction}
                  onChangeText={(text) => {
                    const updatedInstructions = [...newRecipe.instructions];
                    updatedInstructions[index] = text;
                    setNewRecipe(prev => ({ ...prev, instructions: updatedInstructions }));
                  }}
                />
                <TouchableOpacity onPress={() => {
                  const updatedInstructions = newRecipe.instructions.filter((_, i) => i !== index);
                  setNewRecipe(prev => ({ ...prev, instructions: updatedInstructions }));
                }}>
                  <X size={20} />
                </TouchableOpacity>
              </View>
            ))}
            <TouchableOpacity 
              style={styles.addButton}
              onPress={handleAddInstruction}
            >
              <Text style={styles.addButtonText}>Add Instruction</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity 
            style={styles.saveButton}
            onPress={handleSaveRecipe}
          >
            <Text style={styles.saveButtonText}>Save Recipe</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }

  return (
    <ScrollView style={styles.contentContainer}>
      <RecipeTabBar 
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {activeTab === 'own' ? (
        <>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Suggested Recipes</Text>
            {suggestedRecipes.map((recipe) => (
              <TouchableOpacity 
                key={recipe.id} 
                style={styles.recipeRow}
                onPress={() => toggleRecipe(recipe)}
              >
                
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between',width: '100%'}}>
                  <Text>{recipe.title}</Text>
                  <Ionicons name="sparkles" size={16} color="#ffbb33"/>
                </View>
                {recipe?.showDetails && (
                  <View style={styles.recipeDetails}>
                    <Text style={styles.detailsTitle}>Ingredienti:</Text>
                    {recipe.ingredients.map((ing, index) => (
                      <View key={index} style={styles.bulletListItem}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.listItemText}>{ing.amount} {ing.unit} {ing.name}</Text>
                      </View>
                    ))}
                    <Text style={styles.detailsTitle}>Istruzioni:</Text>
                    {recipe.instructions.map((instruction, index) => (
                      <View key={index} style={styles.bulletListItem}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.listItemText}>{instruction}</Text>
                      </View>
                    ))}
                  </View>
                )}
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Your Recipes</Text>
            {userRecipes.map((recipe) => (
              <TouchableOpacity 
                key={recipe.id} 
                style={styles.recipeRow}
                onPress={() => toggleRecipe(recipe)}
              > 
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between',width: '100%'}}>
                  <Text>{recipe.title}</Text>
                  <View style={styles.likeContainer}>
                  <Ionicons name="heart" size={16} color="#bf5252"/>
                    <Text style={styles.smallText}>{recipe.likes}</Text>
                  </View>
                </View>
                {recipe.showDetails && (
                  
                  <View style={styles.recipeDetails}>
                  <Text style={styles.detailsTitle}>Ingredienti:</Text>
                      { recipe.ingredients.map((ing, index) => (
                        <View key={index} style={styles.bulletListItem}>
                          <Text style={styles.bullet}>•</Text>
                          <Text style={styles.listItemText}>{ing.amount} {ing.unit} {ing.name}</Text>
                        </View>
                  ))}
                  <Text style={styles.detailsTitle}>Istruzioni:</Text>
                  {recipe.instructions.map((instruction, index) => (
                    <View key={index} style={styles.bulletListItem}>
                      <Text style={styles.bullet}>•</Text>
                      <Text style={styles.listItemText}>{instruction}</Text>
                    </View>
                  ))}
                  </View>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </>
      ) : communityPosts && communityPosts.length > 0 ? (
        <CommunityPosts 
          posts={communityPosts}
          onRecipePress={toggleRecipe} 
        />
      ) : (
        <View style={styles.emptyStateContainer}>
          <Text style={styles.emptyStateText}>
            Nessun post nella community al momento
          </Text>
        </View>
      )}

      {activeTab =="own"&& <TouchableOpacity 
        style={styles.addRecipeButton}
        onPress={() => setIsCreatingRecipe(true)}
      >
        <Plus size={24} color="white" />
        <Text style={styles.addRecipeButtonText}>Create New Recipe</Text>
      </TouchableOpacity>
      }
    </ScrollView>
  );
}; 