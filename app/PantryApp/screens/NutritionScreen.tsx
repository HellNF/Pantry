import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { LineChart, PieChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { styles } from '../styles';

const NutritionScreen = () => {
  // Example data for charts
  const calorieData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      data: [2000, 1800, 2200, 1900, 2100, 1850, 2300]
    }]
  };

  const macronutrientData = {
    labels: ['Proteins', 'Carbohydrates', 'Fats'],
    datasets: [{
      data: [130, 190, 70] // grams
    }]
  };

  return (
    <ScrollView style={stylesLocal.container}>
      <Text style={stylesLocal.title}>Nutritional Statistics</Text>

      <View style={stylesLocal.section}>
        <Text style={stylesLocal.subtitle}>Daily Calories</Text>
        <LineChart
          data={calorieData}
          width={Dimensions.get('window').width - 60}
          height={200}
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(9, 9, 11, ${opacity})`,
          }}
          bezier
          style={stylesLocal.chart}
        />
      </View>

      <View style={stylesLocal.section}>
        <Text style={stylesLocal.subtitle}>Macronutrient Distribution</Text>
        <PieChart
          data={[
            {
              name: 'Proteins',
              population: 130,
              color: '#41407F',
              legendFontColor: '#7F7F7F',
            },
            {
              name: 'Carbohydrates',
              population: 190,
              color: '#ffbb33',
              legendFontColor: '#7F7F7F',
            },
            {
              name: 'Fats',
              population: 70,
              color: '#ff4444',
              legendFontColor: '#7F7F7F',
            }
          ]}
          width={Dimensions.get('window').width - 40}
          height={220}
          chartConfig={{
            color: (opacity = 1) => `rgba(0, 150, 100, ${opacity})`,
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          style={stylesLocal.chart}
        />
      </View>

      <View style={stylesLocal.summary}>
        <Text style={stylesLocal.subtitle}>Weekly Summary</Text>
        <View style={stylesLocal.statContainer}>
          <StatBox title="Average Calories" value="2021 kcal" />
          <StatBox title="Proteins" value="60g" />
          <StatBox title="Carbohydrates" value="250g" />
          <StatBox title="Fats" value="70g" />
        </View>
      </View>
    </ScrollView>
  );
};

// Component for individual statistics
const StatBox = ({ title, value }: { title: string, value: string }) => (
  <View style={stylesLocal.statBox}>
    <Text style={stylesLocal.statTitle}>{title}</Text>
    <Text style={stylesLocal.statValue}>{value}</Text>
  </View>
);

const stylesLocal = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  section: {
    display: "flex",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#e8e8e8',
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  summary: {
    marginBottom: 30,
  },
  statContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statBox: {
    width: '48%',
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  statTitle: {
    fontSize: 14,
    color: '#666',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default NutritionScreen;