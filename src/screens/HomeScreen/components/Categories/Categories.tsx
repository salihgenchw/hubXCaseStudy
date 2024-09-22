import React, { useEffect, useState } from "react";
import { View, StyleSheet, ActivityIndicator, Alert } from "react-native";
import sizes from "../../../../constants/sizes";
import ApiService from "../../../../api/ApiService";
import CategoryItem from "./CategoryItem";
import COLORS from "../../../../constants/color";

interface Category {
  id: number;
  name: string;
  title: string;
  image: {
    url: string;
  };
  rank: number;
}

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    setLoading(true);
    try {
      const response: { data: Category[] } = await ApiService.get(
        "GET_CATEGORIES"
      );
      setCategories(response?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      Alert.alert("Error", "There was a problem fetching the categories.");
    }
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color={COLORS.primary} />
      ) : (
        <CategoryItem categories={categories} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: sizes.screenHeight * 0.02,
    paddingLeft: sizes.screenWidth * 0.04,
  },
  text: {
    fontSize: sizes.screenWidth * 0.045,
    fontFamily: "Rubik_500Medium",
    marginBottom: sizes.screenHeight * 0.02,
  },
  errorText: {
    color: "red",
    fontSize: sizes.screenWidth * 0.04,
    textAlign: "center",
    marginTop: sizes.screenHeight * 0.02,
  },
});

export default Categories;
