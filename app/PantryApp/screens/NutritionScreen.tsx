import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { LineChart, PieChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { styles } from '../styles';

const NutritionScreen = () => {
  // Dati di esempio per i grafici
  const datiCalorie = {
    labels: ['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom'],
    datasets: [{
      data: [2000, 1800, 2200, 1900, 2100, 1850, 2300]
    }]
  };

  const datiMacronutrienti = {
    labels: ['Proteine', 'Carboidrati', 'Grassi'],
    datasets: [{
      data: [130, 190, 70] // grammi
    }]
  };

  return (
    <ScrollView style={stylesLocal.container}>
      <Text style={stylesLocal.titolo} > Statistiche Nutrizionali</Text>

      <View style={stylesLocal.sezione}>
        <Text style={stylesLocal.sottotitolo}>Calorie Giornaliere</Text>
        <LineChart
          data={datiCalorie}
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
          style={stylesLocal.grafico}
        />
      </View>

      <View style={stylesLocal.sezione}>
        <Text style={stylesLocal.sottotitolo}>Distribuzione Macronutrienti</Text>
        <PieChart
          data={[
            {
              name: 'Proteine',
              population: 130,
              color: '#41407F',
              legendFontColor: '#7F7F7F',
            },
            {
              name: 'Carboidrati',
              population: 190,
              color: '#ffbb33',
              legendFontColor: '#7F7F7F',
            },
            {
              name: 'Grassi',
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
          style={stylesLocal.grafico}
        />
      </View>

      <View style={stylesLocal.riepilogo}>
        <Text style={stylesLocal.sottotitolo}>Riepilogo Settimanale</Text>
        <View style={stylesLocal.statContainer}>
          <StatBox titolo="Media Calorie" valore="2021 kcal" />
          <StatBox titolo="Proteine" valore="60g" />
          <StatBox titolo="Carboidrati" valore="250g" />
          <StatBox titolo="Grassi" valore="70g" />
        </View>
      </View>
    </ScrollView>
  );
};

// Componente per le statistiche individuali
const StatBox = ({ titolo, valore }: { titolo: string, valore: string }) => (
  <View style={stylesLocal.statBox}>
    <Text style={stylesLocal.statTitolo}>{titolo}</Text>
    <Text style={stylesLocal.statValore}>{valore}</Text>
  </View>
);

const stylesLocal = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  titolo: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
  },
  sottotitolo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sezione: {
    display: "flex",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#e8e8e8',
  },
  grafico: {
    marginVertical: 8,
    borderRadius: 16,
  },
  riepilogo: {
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
  statTitolo: {
    fontSize: 14,
    color: '#666',
  },
  statValore: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default NutritionScreen; 