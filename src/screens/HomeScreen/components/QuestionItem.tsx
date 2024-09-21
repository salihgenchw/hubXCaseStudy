import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import sizes from "../../../constants/sizes";

interface Question {
  id: number;
  title: string;
  image_uri: string;
}

interface QuestionItemProps {
  questions: Question[];
}

const QuestionItem: React.FC<QuestionItemProps> = ({ questions }) => {
  return (
    <View>
      <FlatList
        data={questions}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.questionContainer}>
            <Image source={{ uri: item.image_uri }} style={styles.image} />
            <Text numberOfLines={2} style={styles.question}>
              {item.title}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  questionContainer: {
    marginRight: sizes.screenWidth * 0.04,
  },
  image: {
    width: sizes.screenWidth * 0.55,
    height: sizes.screenWidth * 0.45,
    objectFit: "cover",
    borderRadius: sizes.screenWidth * 0.05,
  },
  question: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Rubik_500Medium",
    position: "absolute",
    bottom: 0,
    left: 0,
    height: sizes.screenWidth * 0.15,
    width: sizes.screenWidth * 0.5,
    padding: sizes.screenWidth * 0.025,
  },
});

export default QuestionItem;
