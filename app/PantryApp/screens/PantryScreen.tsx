import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './../styles';

interface PantryItem {
  id: string | number;
  name: string;
  quantity: number;
}

export const PantryScreen = ({ pantryItems }: { pantryItems: PantryItem[] }) => {
  return (
    <View style={styles.contentContainer}>
      <TouchableOpacity style={styles.scanButton}>
        <Text style={styles.buttonText}>Aggiungi Prodotto</Text>
      </TouchableOpacity>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Dispensa</Text>
        {pantryItems.map((item) => (
          <View key={item.id} style={styles.itemRow}>
            <Text>{item.name}</Text>
            <Text>Quantità: {item.quantity}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}; 