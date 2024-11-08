import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MenuItem = ({ icon, title }: { icon: string, title: string }) => (
  <TouchableOpacity style={styles.menuItem}>
    <Ionicons name={icon as any} size={24} color="black" style={styles.menuIcon} />
    <Text style={styles.menuText}>{title}</Text>
    <Ionicons name="chevron-forward" size={24} color="#666" />
  </TouchableOpacity>
);

const LoyaltyCard = ({ store, cardNumber }: { store: string, cardNumber: string }) => (
  <View style={styles.loyaltyCard}>
    <Text style={styles.storeName}>{store}</Text>
    <Text style={styles.cardNumber}>{cardNumber}</Text>
  </View>
);

export default function MoreScreen(){
  return (
    <View style={styles.container}>
      <MenuItem icon="cart-outline" title="Shopping List" />
      <MenuItem icon="card-outline" title="Loyalty Cards" />
      <MenuItem icon="document-text-outline" title="Store Flyers" />
      <MenuItem icon="leaf-outline" title="Sustainability" />

      <View style={styles.loyaltyCardsSection}>
        <Text style={styles.sectionTitle}>Your Loyalty Cards</Text>
        <LoyaltyCard store="SuperMart" cardNumber="**** 1234" />
        <LoyaltyCard store="FreshGrocer" cardNumber="**** 5678" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  menuIcon: {
    marginRight: 12,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
  },
  loyaltyCardsSection: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  loyaltyCard: {
    padding: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  storeName: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 4,
  },
  cardNumber: {
    fontSize: 14,
    color: '#666',
  },
}); 