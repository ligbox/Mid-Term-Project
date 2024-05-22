import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';

const AddMedScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image 
          source={require('./assets/Med.png')} // 약 이미지 경로를 설정하세요
          style={styles.pillImage}
        />
        <Text style={styles.titleText}>복용하고 있는 약을 검색해보세요</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>사진으로 검색하기</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('AddMed_1')} // 'AddMed_1'은 네비게이터에 등록된 화면의 이름이어야 합니다.
        >
          <Text style={styles.buttonText}>제품명/성분명 검색</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backButtonText}>이전</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  pillImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#E8E8E8',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
  },
  backButton: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#5886FE',
    padding: 15,
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 18,
  }
});

export default AddMedScreen;
