import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState, useCallback } from "react";

import axios from "axios";

import { useFocusEffect } from "@react-navigation/native";

const DetailScreen = ({ navigation, route }) => {
  const { id, title } = route.params;

  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  React.useLayoutEffect(() => {
    navigation.setOptions(
      {
        // title:'รายละเอียกสินค้า'
        title: title,
      });
  },[navigation, title]);

  const getData = async (id) => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://api.codingthailand.com/api/course/" + id
      );
      console.log(res.data.data);
      setDetail(res.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error); //set error to state error
    }
  };

  useEffect(() => {
    getData(id);
  }, [id]);

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
    getData(id);
  };

  const _renderItem = ({ item,index }) => {
    return (
      <View style={styles.dataContainer}>
        <View style={{flex:1, flexDirection:'row', margin:5}}>
          <Text style={styles.thumbnail}>{index+1}</Text>
          <View style={styles.dataContent}>
            <Text style={styles.title}>{item.ch_title}</Text>
            <Text note numberOfLines={1}>{item.ch_dateadd}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={detail}
        keyExtractor={(item) => item.ch_id.toString()}
        renderItem={_renderItem}
        refreshing={loading}
        onRefresh={_onRefesh}
      />
    </View>
  );
};

export default DetailScreen;

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
  thumbnail: {
    width: 30,
    height: 30,
    color: "#444",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
