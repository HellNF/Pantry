import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../styles';

export const FridgeScreen = ({ 
  fridgeItems,
  pantryItems = [],
  setActiveTab,
}: { 
  fridgeItems: any[],
  pantryItems?: any[],
  setActiveTab: (tab: string) => void, 
}) => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  }, []);

  const getStatusStyle = (daysLeft: number) => {
    if (daysLeft <= 0) return styles.expiredStatus;
    if (daysLeft <= 5) return styles.warningStatus;
    return styles.normalStatus;
  };

  return (
    <ScrollView 
      style={styles.container}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      <View style={styles.contentHeader}>
        <Text style={styles.contentTitle}> My Storage</Text>
        
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{fridgeItems.length}</Text>
          <Text style={styles.statLabel}>Fridge</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{pantryItems.length}</Text>
          <Text style={styles.statLabel}>Pantry</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>
            {fridgeItems.filter(item => item.daysLeft <= 5).length}
          </Text>
          <Text style={styles.statLabel}>Expiring</Text>
        </View>
      </View>

      <View style={styles.fridgeCard}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Fridge</Text>
          <TouchableOpacity style={styles.addItemButton}>
            <Ionicons name="add-circle" size={24} color="#2f2f31" />
          </TouchableOpacity>
        </View>
        {fridgeItems.map((item) => (
          <TouchableOpacity key={item.id} style={styles.itemRow}>
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.expiryDate}>Expire date: {item.expiryDate}</Text>
            </View>
            <View style={[styles.statusBadge, getStatusStyle(item.daysLeft)]}>
              <Text style={styles.statusText}>
                {item.daysLeft <= 0 ? 'Scaduto' : `${item.daysLeft}d`}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.pantryCard}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Pantry</Text>
          <TouchableOpacity style={styles.addItemButton}>
            <Ionicons name="add-circle" size={24} color="#2f2f31" />
          </TouchableOpacity>
        </View>
        {pantryItems.map((item) => (
          <TouchableOpacity key={item.id} style={styles.itemRow}>
            <Text style={styles.itemName}>{item.name}</Text>
            <View style={styles.quantityContainer}>
              <TouchableOpacity style={styles.quantityButton}>
                <Ionicons name="remove" size={20} color="#2f2f31" />
              </TouchableOpacity>
              <Text style={styles.quantityText}>{item.quantity}</Text>
              <TouchableOpacity style={styles.quantityButton}>
                <Ionicons name="add" size={20} color="#2f2f31" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
        <LinearGradient
          colors={['rgba(255,255,255,0)', 'rgba(255,255,255,1)']}
          style={styles.cardGradient}
        />
      </View>
    </ScrollView>
  );
}; 