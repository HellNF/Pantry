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

export default function App() {
  const [activeTab, setActiveTab] = useState("planner");
  
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
  const renderContent = () => {
    switch (activeTab) {
      case "fridge":
        return <FridgeScreen fridgeItems={fridgeItems} pantryItems={pantryItems} setActiveTab={setActiveTab} />;
      case "more":
        return <MoreScreen setActiveTab={setActiveTab} />;
      case "recipes":
        return <RecipesScreen suggestedRecipes={suggestedRecipes} userRecipes={userRecipes}  />;
      case "planner":
        return <PlannerScreen  />;
      case "scanner":
        return <ScannerScreen onScan={() => {}}  />;
      case "nutrition":
        return <NutritionScreen />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        {renderContent()}
      </ScrollView>
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
    </SafeAreaView>
  );
}
