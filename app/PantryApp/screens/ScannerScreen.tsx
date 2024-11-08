import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
const { width, height } = Dimensions.get('window');
export const ScannerScreen = ({ onScan, onClose }: { 

  onScan: (barcode: string) => void, 
  onClose: () => void 
}) => {
  const [scanned, setScanned] = useState(false);
  
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    return (
      <View style={styles.container}>
        <Text>In attesa dei permessi della fotocamera...</Text>
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text>Permessi della fotocamera negati. Abilitare i permessi per continuare.</Text>
      </View>
    );
  }

  const handleBarCodeScanned = ({ data }: { data: string }) => {
    if (!scanned) {
      setScanned(true);
      onScan(data);
    }
  };
  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  return (
    <View style={styles.container}>
    <BlurView intensity={20} style={styles.blurContainer}>
      <CameraView
        style={styles.camera}
        facing={facing}
        barcodeScannerSettings={{
            barcodeTypes: ["qr"],
          }}
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
      >
        <View style={styles.overlay}>
          <TouchableOpacity 
            style={styles.closeButton}
            onPress={onClose}
          >
            <Ionicons name="close" size={24} color="#000" />
          </TouchableOpacity>
          <View style={styles.scanArea} />
        </View>
      </CameraView>
      {scanned && (
        <TouchableOpacity style={styles.rescanButton} onPress={() => setScanned(false)}>
          <Text style={styles.rescanButtonText}>Riprova</Text>
        </TouchableOpacity>
      )}
    </BlurView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: height-100,
    width: width,
    flex: 1,
    zIndex: 1,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  blurContainer: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 20,
  },
  camera: {
    flex: 1,
    
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  closeButton: {
    position: 'absolute',
    bottom: 50,           // Modificato da bottom: 50
    left: '50%',          // Modificato da left: "45%"
    transform: [          // Aggiunto transform
      {translateX: -27}  // Metà della larghezza del bottone (padding + icon   // Metà dell'altezza del bottone (padding + icon)
    ],
    padding: 15,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 30,
    zIndex: 1,
  },
  closeButtonText: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: 'bold',
  },
  scanArea: {
    position: 'absolute',
    top: '25%',
    left: '10%',
    right: '10%',
    height: '50%',
    borderWidth: 2,
    borderColor: '#007AFF',
    borderRadius: 10,
    backgroundColor: 'transparent',
  },
  rescanButton: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: '#007AFF',
    borderRadius: 25,
  },
  rescanButtonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  }
});
