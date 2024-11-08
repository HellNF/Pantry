import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ShoppingCart, Package, ChefHat, Calendar } from 'lucide-react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './../styles';

export const Navbar = ({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (tab: string) => void }) => {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity style={styles.navItem}
        onPress={() => setActiveTab("fridge")}>
          <Ionicons name={activeTab === "fridge" ? "home" : "home-outline"} size={24} color="#000" />
          <Text style={styles.navText}>Pantry</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}
        onPress={() => setActiveTab("recipes")}>
          <Ionicons name={activeTab === "recipes" ? "book" : "book-outline"} size={24} color="#000" />
          <Text style={styles.navText}>Recipes</Text>
        </TouchableOpacity>

      <TouchableOpacity style={styles.navItem}
        onPress={() => setActiveTab("planner")}>
          <Ionicons name={activeTab === "planner" ? "calendar" : "calendar-outline"} size={24} color="#000" />
          <Text style={styles.navText}>Planner</Text>
        </TouchableOpacity>

      <TouchableOpacity style={styles.navItem} 
        onPress={() => setActiveTab("more")}>
          <Ionicons name={activeTab === "more" ? "add-circle" : "add-circle-outline"} size={24} color="#000" />
          <Text style={styles.navText}>More</Text>
        </TouchableOpacity>
    </View>
  );
}; 

