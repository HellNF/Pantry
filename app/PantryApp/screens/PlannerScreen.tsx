import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './../styles';

type MealType = 'breakfast' | 'lunch' | 'dinner';
const MEALS: Record<MealType, string> = {
  breakfast: 'Breakfast',
  lunch: 'Lunch',
  dinner: 'Dinner'
};

const WeekNavigator = ({ currentWeek }: { currentWeek: string }) => (
  <View style={styles.weekNavigator}>
    <TouchableOpacity>
      <Ionicons name="chevron-back" size={24} color="black" />
    </TouchableOpacity>
    <Text style={styles.weekText}>{currentWeek}</Text>
    <TouchableOpacity>
      <Ionicons name="chevron-forward" size={24} color="black" />
    </TouchableOpacity>
  </View>
);

export const PlannerScreen = () => {
  const currentWeek = "Nov 15 - Nov 21";
  
  const weekData = [
    { day: 'Mon', date: 'Nov 15', meals: { breakfast: 'Cheesy O', lunch: 'Pasta al P', dinner: 'Pasta al P' } },
    { day: 'Tue', date: 'Nov 16', meals: { breakfast: 'Quick Stir', lunch: 'Cheesy O', dinner: null } },
    { day: 'Wed', date: 'Nov 17', meals: { breakfast: null, lunch: null, dinner: null } },
    { day: 'Thu', date: 'Nov 18', meals: { breakfast: null, lunch: null, dinner: null } },
    { day: 'Fri', date: 'Nov 19', meals: { breakfast: null, lunch: null, dinner: null } },
    { day: 'Sat', date: 'Nov 20', meals: { breakfast: null, lunch: null, dinner: null } },
    { day: 'Sun', date: 'Nov 21', meals: { breakfast: null, lunch: null, dinner: null } },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.plannerTitle}>Meal Planner</Text>
      <WeekNavigator currentWeek={currentWeek} />
      
      <View style={styles.headerRow}>
        <Text style={styles.dayHeaderCell}>Day</Text>
        <Text style={styles.mealHeaderCell}>{MEALS.breakfast}</Text>
        <Text style={styles.mealHeaderCell}>{MEALS.lunch}</Text>
        <Text style={styles.mealHeaderCell}>{MEALS.dinner}</Text>
      </View>

      <ScrollView>
        {weekData.map((dayData) => (
          <View key={dayData.day} style={styles.dayRow}>
            <View style={styles.dayCell}>
              <Text style={styles.dayText}>{dayData.day}</Text>
              <Text style={styles.dateText}>{dayData.date}</Text>
            </View>
            {Object.values(MEALS).map((mealType) => (
              <TouchableOpacity 
                key={mealType} 
                style={styles.mealCell}
              >
                <Text style={styles.mealText}>
                  {dayData.meals[mealType.toLowerCase() as MealType] || 'Add meal'}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}; 