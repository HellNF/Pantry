import React, { createContext, useContext, useState } from 'react';
import { Recipe } from '../types';

interface RecipesContextType {
  suggestedRecipes: Recipe[];
  userRecipes: Recipe[];
  setSuggestedRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>;
  setUserRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>;
}

const RecipesContext = createContext<RecipesContextType | undefined>(undefined);

const defaultSuggestedRecipes = [
  { id: 1, title: 'Pasta al Pomodoro', likes: 56, ingredients: [{amount: '1', unit: 'kg', name: 'Pasta'}, {amount: '1', unit: 'kg', name: 'Canned Tomatoes'}], instructions: [], showDetails: false },
  { id: 2, title: 'Cheesy Omelette', likes: 10, ingredients: [{amount: '1', unit: 'kg', name: 'Eggs'}, {amount: '1', unit: 'kg', name: 'Cheese'}], instructions: [], showDetails: false },
];

const defaultUserRecipes = [
  { id: 1, title: 'Grandma\'s Lasagna', author: 'You', likes: 156, ingredients: [{amount: '1', unit: 'kg', name: 'Pasta'}, {amount: '1', unit: 'kg', name: 'Canned Tomatoes'}], instructions: ["1. Boil the pasta", "2. Add the tomatoes", "3. Serve"], showDetails: false },
  { id: 2, title: 'Quick Stir Fry', author: 'CookMaster', likes: 2403, ingredients: [{amount: '1', unit: 'kg', name: 'Eggs'}, {amount: '1', unit: 'kg', name: 'Cheese'}], instructions: ["1. Beat the eggs", "2. Add the cheese", "3. Serve"], showDetails: false },
];

export const RecipesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [suggestedRecipes, setSuggestedRecipes] = useState(defaultSuggestedRecipes);
  const [userRecipes, setUserRecipes] = useState(defaultUserRecipes);

  return (
    <RecipesContext.Provider value={{
      suggestedRecipes: suggestedRecipes as Recipe[],
      userRecipes: userRecipes as Recipe[],
      setSuggestedRecipes: setSuggestedRecipes as React.Dispatch<React.SetStateAction<Recipe[]>>,
      setUserRecipes: setUserRecipes as React.Dispatch<React.SetStateAction<Recipe[]>>
    }}>
      {children}
    </RecipesContext.Provider>
  );
};

export const useRecipes = () => {
  const context = useContext(RecipesContext);
  if (context === undefined) {
    throw new Error('useRecipes must be used within a RecipesProvider');
  }
  return context;
}; 