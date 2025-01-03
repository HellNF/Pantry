import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles';

interface RecipeTabBarProps {
  activeTab: 'own' | 'community';
  onTabChange: (tab: 'own' | 'community') => void;
}

export const RecipeTabBar = ({ activeTab, onTabChange }: RecipeTabBarProps) => {
  return (
    <View style={styles.recipeTabBar}>
      <TouchableOpacity 
        style={[
          styles.recipeTab, 
          activeTab === 'own' && styles.recipeTabActive
        ]}
        onPress={() => onTabChange('own')}
      >
        <Text style={[
          styles.recipeTabText,
          activeTab === 'own' && styles.recipeTabTextActive
        ]}>Le tue ricette</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={[
          styles.recipeTab,
          activeTab === 'community' && styles.recipeTabActive
        ]}
        onPress={() => onTabChange('community')}
      >
        <Text style={[
          styles.recipeTabText,
          activeTab === 'community' && styles.recipeTabTextActive
        ]}>Community</Text>
      </TouchableOpacity>
    </View>
  );
}; 