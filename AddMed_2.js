import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, SafeAreaView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useMedications } from './MedContext'; // Context import

const AddMed_2 = ({ navigation }) => {
  const { medications, removeMedication } = useMedications(); // Context 사용

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>복용중인 약</Text>
      </View>
      <FlatList
        data={medications}
        keyExtractor={(item) => item.itemSeq.toString()}
        renderItem={({ item }) => (
          <View style={styles.medicationItem}>
            <Image
              source={{ uri: item.itemImage }}
              style={styles.image}
            />
            <Text style={styles.medicationText}>{item.itemName}</Text>
            <TouchableOpacity onPress={() => removeMedication(item.itemSeq)}>
              <Ionicons name="close-circle" size={24} color="red" />
            </TouchableOpacity>
          </View>
        )}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddMed_1')}>
          <Text style={styles.buttonText}>더 추가하기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MainScreen')}>
          <Text style={styles.buttonText}>메인 화면으로</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  medicationItem: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  medicationText: {
    flex: 1,
    marginLeft: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  button: {
    backgroundColor: '#5886FE',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default AddMed_2;
