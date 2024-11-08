import React from 'react';
import { View, Text, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native';
import { Plus, Heart, Camera, X } from 'lucide-react-native';
import { styles } from './../styles';

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
}

export const RecipesScreen = ({ suggestedRecipes, userRecipes }: { suggestedRecipes: Recipe[], userRecipes: Recipe[] }) => {
  const [selectedRecipe, setSelectedRecipe] = React.useState<Recipe | null>(null);
  const [isCreatingRecipe, setIsCreatingRecipe] = React.useState(false);
  const [newRecipe, setNewRecipe] = React.useState<Recipe>({
    id: Date.now(),
    title: '',
    ingredients: [],
    instructions: [],
  });

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
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Ricette Suggerite</Text>
        {suggestedRecipes.map((recipe) => (
          <View key={recipe.id} style={styles.itemRow}>
            <Text>{recipe.title}</Text>
            <Text style={styles.smallText}>{recipe.ingredients.join(', ')}</Text>
          </View>
        ))}
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Le Tue Ricette</Text>
        {userRecipes.map((recipe) => (
          <View key={recipe.id} style={styles.itemRow}>
            <Text>{recipe.title}</Text>
            <View style={styles.likeContainer}>
              <Heart size={16} />
              <Text style={styles.smallText}>{recipe.likes}</Text>
            </View>
          </View>
        ))}
      </View>
      <TouchableOpacity 
        style={styles.addRecipeButton}
        onPress={() => setIsCreatingRecipe(true)}
      >
        <Plus size={24} color="white" />
        <Text style={styles.addRecipeButtonText}>Create New Recipe</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}; 