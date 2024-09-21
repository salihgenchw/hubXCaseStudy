import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import sizes from "../../../../constants/sizes";

interface Category {
  id: number;
  name: string;
  title: string;
  rank: number;
  image: {
    url: string;
  };
}

interface CategoryItemProps {
  categories: Category[];
}

const CategoryItem: React.FC<CategoryItemProps> = ({ categories }) => {
  return (
    <View>
      <FlatList
        data={categories}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.categoryContainer}>
            <Image source={{ uri: item.image.url }} style={styles.image} />
            <Text numberOfLines={3} style={styles.categoryText}>
              {item.title}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatListContent: {
    justifyContent: "center",
  },
  categoryContainer: {
    marginRight: sizes.screenWidth * 0.045,
    marginBottom: sizes.screenHeight * 0.02,
    width: sizes.screenWidth * 0.44,
    height: sizes.screenWidth * 0.395,
    backgroundColor: "#fff",
    borderRadius: sizes.screenWidth * 0.05,
    borderWidth: 1,
    borderColor: "#ddd",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: sizes.screenWidth * 0.05,
  },
  categoryText: {
    fontSize: sizes.screenWidth * 0.045,
    fontFamily: "Rubik_500Medium",
    height: "100%",
    width: sizes.screenWidth * 0.32,
    padding: sizes.screenWidth * 0.03,
    position: "absolute",
    bottom: 0,
    left: 0,
  },
});

export default CategoryItem;
