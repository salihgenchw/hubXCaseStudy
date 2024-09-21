import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, ActivityIndicator, Alert } from "react-native";
import sizes from "../../../constants/sizes";
import ApiService from "../../../api/ApiService";
import QuestionItem from "./QuestionItem";

interface Question {
  id: number;
  title: string;
  image_uri: string;
}

const Questions: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getQuestions();
  }, []);

  const getQuestions = async () => {
    setLoading(true);
    try {
      const response: Question[] = await ApiService.get("GET_QUESTIONS");
      setQuestions(response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      Alert.alert("Error", "There was a problem fetching the questions.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Get Started</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <QuestionItem questions={questions} />
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

export default Questions;
