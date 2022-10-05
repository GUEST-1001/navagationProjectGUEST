import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";

import axios from "axios";

const ProductScreen = ({ navigation }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://api.codingthailand.com/api/course");
      console.log(res.data.data);
      setProduct(res.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error); //set error to state error
    }
  };

  // useEffect(() => {
  //   getData();
  // }, []);
  useFocusEffect(
    useCallback(() => {
      getData();
    }, [])
  );

  if (error) {
    //if error is exist return UI
    return (
      <View style={styles.container}>
        <Text>{error.message}</Text>
        <Text>Unable to connect the server</Text>
      </View>
    );
  }

  if (loading === true) {
    return (
      <View>
        <ActivityIndicator color="#f4511e" />
      </View>
    );
  }

  const _onRefesh = () => {
    getData();
  };

  const _renderItem = ({ item }) => {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <TouchableOpacity
          style={styles.addButtonStyle}
          onPress = {() => {
            navigation.navigate('Detail',{
              id:item.id,
              title:item.title
            })
          }}
        >
          <View style={styles.dataContainer}>
            <View style={styles.container}>
              <Image
                style={styles.thumbnail}
                source={{ uri: item.picture }}
                resizeMode="cover"
              />

              <View style={styles.dataContent}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.detail}>{item.detail}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
  };

  return (
    <View>
      <FlatList
        data={product}
        keyExtractor={(item) => item.id.toString()}
        renderItem={_renderItem}
        refreshing={loading}
        onRefresh={_onRefesh}
      />
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    height: 80,
    elevation: 3,
    borderColor: "gray",
    borderRadius: 5,
    flexDirection: "row",
    marginHorizontal: 20,
  },
  dataContainer: {
    flex: 1,
  },
  thumbnail: {
    width: 70,
    height: 70,
  },
  dataContent: {
    marginTop: 5,
    marginLeft: 15,
  },
  title: {
    color: "#444",
    fontSize: 18,
    fontWeight: "bold",
  },
  detail: {
    fontSize: 16,
    color: "#888",
    fontWeight: "700",
  },
  addButtonStyle: {
    width: "100%",
    marginBottom: 15,
  },
});
