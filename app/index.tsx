import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const Home = () => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <View style={styles.container}>
      {/* Top View with Image */}
      <View style={styles.header}>
        <Image 
          source={{ uri: "https://miscbit.vercel.app/static/media/logo.578ea6c04c7efd159549.webp" }} 
          style={styles.headerImage} 
        />
      </View>
      
      <View style={styles.firstView}>
        
          <Text style={styles.viewText}>Welcome to the Home Page</Text>
      </View>
      
      <View style={styles.secondView}>
        <Text style={styles.viewText}>Explore the Course Material Below</Text>
      </View>
      
      <View style={styles.Middle}>
        <Text style={styles.viewText}>SEM - I UG COURSE MATERIAL</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  headerImage: {
    width: "90%",
    height: 40,
    borderRadius: 30,
    marginTop: 10,
  },
  firstView: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#ffebcd",
    borderRadius: 10,
    marginHorizontal: 20,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#ffebcd",
    borderRadius: 10,
    padding: 15,
  },
  pressed: {
    transform: [{ scale: 0.85 }],
    backgroundColor:'#fff'
  },
  secondView: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#add8e6",
    borderRadius: 10,
    marginHorizontal: 20,
  },
  viewText: {
    fontSize: 18,
    color: "#333",
    textAlign: "center",
  },
  Middle: {
    fontSize: 10,
    marginHorizontal: 20,
    padding: 15,
    backgroundColor: "#E4C59E",
    marginTop: 30,
    borderRadius: 10,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Home;
