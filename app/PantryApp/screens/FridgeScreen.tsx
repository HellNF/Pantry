import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, Dimensions} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './../styles'; 
import { ScannerScreen } from './ScannerScreen';
const { width, height } = Dimensions.get('window');
interface FridgeItem {
  id: string | number;
  name: string;
  daysLeft: number;
}

interface PantryItem {
  id: string | number;
  name: string;
  quantity: number;
}

export const FridgeScreen = ({ 
  fridgeItems,
  pantryItems = [],
  setActiveTab,
}: { 
  fridgeItems: FridgeItem[],
  pantryItems?: PantryItem[],
  setActiveTab: (tab: string) => void, 
}) => {
  const [showScanner, setShowScanner] = useState(false);

  const handleScan = (barcode: string) => {
    Alert.alert('Codice scansionato', `Barcode: ${barcode}`);
    setShowScanner(false);
  };

  const getStatusStyle = (daysLeft: number) => {
    if (daysLeft <= 0) return styles.expiredStatus;
    if (daysLeft <= 5) return styles.warningStatus;
    return styles.normalStatus;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.scanButton}
        onPress={() => setActiveTab("scanner")}
      >
        <Ionicons name="barcode-outline" size={24} color="white" />
        <Text style={styles.scanButtonText}>Scan Barcode</Text>
      </TouchableOpacity>

      

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Fridge Contents</Text>
        {fridgeItems.map((item) => (
          <View key={item.id} style={styles.itemRow}>
            <Text style={styles.itemName}>{item.name}</Text>
            <View style={[styles.statusBadge, getStatusStyle(item.daysLeft)]}>
              <Text style={styles.statusText}>
                {item.daysLeft <= 0 ? 'Expired' : `${item.daysLeft} days left`}
              </Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Pantry</Text>
        {pantryItems.map((item) => (
          <View key={item.id} style={styles.itemRow}>
            <Text style={styles.itemName}>{item.name}</Text>
            <View style={styles.quantityBadge}>
              <Text style={styles.quantityText}>Qty: {item.quantity}</Text>
            </View>
          </View>
        ))}
        <LinearGradient
            colors={['rgba(255,255,255,0)', 'rgba(255,255,255,1)']}
            style={styles.cardGradient}
        />
      </View>

      
    </View>
  );
};

const newStyles = {
  container: {
    height: height,
    flex: 1,
    backgroundColor: '#f5f5f5',
    overflow: 'scroll',
  },
  scanButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    padding: 16,
    borderRadius: 8,
    margin: 16,
  },
  scanButtonText: {
    color: 'white',
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '600',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    margin: 16,
    marginTop: 0,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  itemName: {
    fontSize: 16,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  expiredStatus: {
    backgroundColor: '#ff4444',
  },
  warningStatus: {
    backgroundColor: '#ffbb33',
  },
  normalStatus: {
    backgroundColor: '#e8e8e8',
  },
  statusText: {
    color: '#fff',
    fontSize: 14,
  },
  quantityBadge: {
    backgroundColor: '#e8e8e8',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  quantityText: {
    color: '#000',
    fontSize: 14,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e8e8e8',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    marginTop: 4,
  },
}; 