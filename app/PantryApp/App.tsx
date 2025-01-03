import React, { useState } from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import { FridgeScreen } from './screens/FridgeScreen';
import { PantryScreen } from './screens/PantryScreen';
import { RecipesScreen } from './screens/RecipesScreen';
import { PlannerScreen } from './screens/PlannerScreen';
import { ScannerScreen } from './screens/ScannerScreen';
import  MoreScreen  from './screens/MoreScreen';
import { Navbar } from './components/Navbar';
import NutritionScreen from './screens/NutritionScreen';
import { styles } from './styles';
import { UserProvider } from './contexts/UserContext';
import { RecipesProvider } from './contexts/RecipesContext';
import { CommunityPosts } from './components/CommunityPosts';


export default function App() {
  const [activeTab, setActiveTab] = useState("fridge");
  
  const fridgeItems = [
    { id: 1, name: 'Milk', expiryDate: '2023-06-30', daysLeft: 5 },
    { id: 2, name: 'Eggs', expiryDate: '2023-06-25', daysLeft: 0 },
    { id: 3, name: 'Cheese', expiryDate: '2023-07-15', daysLeft: 20 },
  ]
  const suggestedRecipes = [
    { id: 1, title: 'Pasta al Pomodoro',likes: 56, ingredients: [{amount: '1', unit: 'kg', name: 'Pasta'}, {amount: '1', unit: 'kg', name: 'Canned Tomatoes'}], instructions: [],showDetails: false },
    { id: 2, title: 'Cheesy Omelette',likes: 10, ingredients: [{amount: '1', unit: 'kg', name: 'Eggs'}, {amount: '1', unit: 'kg', name: 'Cheese'}], instructions: [],showDetails: false },
  ]

  const userRecipes = [
    { id: 1, title: 'Grandma\'s Lasagna', author: 'You', likes: 156, ingredients: [{amount: '1', unit: 'kg', name: 'Pasta'}, {amount: '1', unit: 'kg', name: 'Canned Tomatoes'}], instructions: ["1. Boil the pasta", "2. Add the tomatoes", "3. Serve"], showDetails: false },
    { id: 2, title: 'Quick Stir Fry', author: 'CookMaster', likes: 2403, ingredients: [{amount: '1', unit: 'kg', name: 'Eggs'}, {amount: '1', unit: 'kg', name: 'Cheese'}], instructions: ["1. Beat the eggs", "2. Add the cheese", "3. Serve"], showDetails: false },
  ]

  const loyaltyCards = [
    { id: 1, name: 'SuperMart', number: '**** 1234' },
    { id: 2, name: 'FreshGrocer', number: '**** 5678' },
  ]

  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const mealTimes = ['Breakfast', 'Lunch', 'Dinner']

  const pantryItems = [
    { id: 1, name: 'Pasta', quantity: 2 },
    { id: 2, name: 'Canned Tomatoes', quantity: 3 },
    { id: 3, name: 'Rice', quantity: 1 },
    { id: 4, name: 'Olive Oil', quantity: 1 },
    { id: 5, name: 'Black Pepper', quantity: 1 },
    { id: 6, name: 'Salt', quantity: 2 },
    { id: 7, name: 'Flour', quantity: 3 },
    { id: 8, name: 'Sugar', quantity: 2 },
    { id: 9, name: 'Coffee', quantity: 2 },
    { id: 10, name: 'Tea Bags', quantity: 1 },
    { id: 11, name: 'Garlic Powder', quantity: 1 },
    { id: 12, name: 'Chicken Stock', quantity: 4 },
    { id: 13, name: 'Beans', quantity: 3 },
    { id: 14, name: 'Tuna Cans', quantity: 5 },
    { id: 15, name: 'Honey', quantity: 1 },
    { id: 16, name: 'Cereal', quantity: 2 },
    { id: 17, name: 'Baking Powder', quantity: 1 },
    { id: 18, name: 'Vanilla Extract', quantity: 1 }
  ]

  const communityPosts = [
    {
      id: 1,
      author: {
        name: "Marco Rossi",
        avatar: "https://i.pravatar.cc/150?img=1"
      },
      content: "Ho provato questa ricetta della nonna, è fantastica! 👩‍🍳 La consiglio a tutti, soprattutto per le cene in famiglia.",
      recipe: userRecipes[0],
      likes: 24,
      comments: 5,
      commentsList: [
        {
          id: 1,
          author: {
            name: "Sofia Romano",
            avatar: "https://i.pravatar.cc/150?img=4"
          },
          content: "Che bello! Anche io la proverò questo weekend 😊",
          timestamp: "1h fa"
        },
        {
          id: 2,
          author: {
            name: "Giuseppe Verdi",
            avatar: "https://i.pravatar.cc/150?img=3"
          },
          content: "Quanti strati hai fatto? Io di solito ne faccio 4",
          timestamp: "30m fa"
        }
      ],
      timestamp: "2h fa"
    },
    {
      id: 2,
      author: {
        name: "Laura Bianchi",
        avatar: "https://i.pravatar.cc/150?img=2"
      },
      content: "Questo stir-fry è perfetto per una cena veloce 🥘 L'ho preparato ieri sera ed è piaciuto tantissimo ai bambini!",
      recipe: userRecipes[1],
      likes: 15,
      comments: 3,
      commentsList: [
        {
          id: 1,
          author: {
            name: "Marco Rossi",
            avatar: "https://i.pravatar.cc/150?img=1"
          },
          content: "Ottima idea! Anche ai miei bambini piace molto 👶",
          timestamp: "3h fa"
        },
        {
          id: 2,
          author: {
            name: "Elena Costa",
            avatar: "https://i.pravatar.cc/150?img=6"
          },
          content: "Che verdure hai usato? 🥬",
          timestamp: "4h fa"
        },
        {
          id: 3,
          author: {
            name: "Paolo Ferrari",
            avatar: "https://i.pravatar.cc/150?img=7"
          },
          content: "Proverò anche io questa versione veloce!",
          timestamp: "4h fa"
        }
      ],
      timestamp: "5h fa"
    },
    {
      id: 3,
      author: {
        name: "Giuseppe Verdi",
        avatar: "https://i.pravatar.cc/150?img=3"
      },
      content: "Ho modificato leggermente la ricetta aggiungendo più formaggio 🧀 È venuta ancora più buona!",
      recipe: userRecipes[0],
      likes: 42,
      comments: 8,
      commentsList: [
        {
          id: 1,
          author: {
            name: "Laura Bianchi",
            avatar: "https://i.pravatar.cc/150?img=2"
          },
          content: "Che tipo di formaggio hai usato? 🧀",
          timestamp: "20h fa"
        },
        {
          id: 2,
          author: {
            name: "Sofia Romano",
            avatar: "https://i.pravatar.cc/150?img=4"
          },
          content: "Io ho provato con la mozzarella, è venuta buonissima!",
          timestamp: "22h fa"
        }
      ],
      timestamp: "1g fa"
    },
    {
      id: 4,
      author: {
        name: "Sofia Romano",
        avatar: "https://i.pravatar.cc/150?img=4"
      },
      content: "Perfetta per il pranzo della domenica! Ho aggiunto anche delle melanzane grigliate come contorno 🍆",
      recipe: userRecipes[0],
      likes: 31,
      comments: 6,
      commentsList: [],
      timestamp: "2g fa"
    },
    {
      id: 5,
      author: {
        name: "Antonio Marino",
        avatar: "https://i.pravatar.cc/150?img=5"
      },
      content: "Ho provato questa versione vegetariana sostituendo il pollo con il tofu. Davvero ottima! 🌱",
      recipe: userRecipes[1],
      likes: 19,
      comments: 4,
      commentsList: [],
      timestamp: "3g fa"
    },
    {
      id: 6,
      author: {
        name: "Elena Costa",
        avatar: "https://i.pravatar.cc/150?img=6"
      },
      content: "Ho preparato questa ricetta per una cena con gli amici, tutti entusiasti! Grazie per la condivisione 🎉",
      recipe: userRecipes[0],
      likes: 27,
      comments: 7,
      commentsList: [],
      timestamp: "4g fa"
    },
    {
      id: 7,
      author: {
        name: "Paolo Ferrari",
        avatar: "https://i.pravatar.cc/150?img=7"
      },
      content: "Ho aggiunto dei peperoni colorati e delle carote. Ha dato un tocco di colore in più al piatto! 🥕🫑",
      recipe: userRecipes[1],
      likes: 23,
      comments: 5,
      commentsList: [],
      timestamp: "5g fa"
    },
    {
      id: 8,
      author: {
        name: "Chiara Ricci",
        avatar: "https://i.pravatar.cc/150?img=8"
      },
      content: "L'ho preparata per il compleanno di mia figlia. È stato un successone! 🎂",
      recipe: userRecipes[0],
      likes: 38,
      comments: 9,
      commentsList: [],
      timestamp: "1set fa"
    }
  ]

  const renderContent = () => {
    switch (activeTab) {
      case "fridge":
        return <FridgeScreen fridgeItems={fridgeItems} pantryItems={pantryItems} setActiveTab={setActiveTab} />;
      case "more":
        return <MoreScreen setActiveTab={setActiveTab} />;
      case "recipes":
        return <RecipesScreen  communityPosts={communityPosts}/>;
      case "planner":
        return <PlannerScreen />;
      case "scanner":
        return <ScannerScreen onScan={() => {}} />;
      case "nutrition":
        return <NutritionScreen />;
    }
  };

  return (
    <UserProvider>
      <RecipesProvider>
        
          <SafeAreaView style={styles.container}>
            <ScrollView style={styles.content}>
              {renderContent()}
            </ScrollView>
            <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
          </SafeAreaView>
        
      </RecipesProvider>
    </UserProvider>
  );
}

