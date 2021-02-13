import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]); //list
  const [isAddMode, setIsAddMode] = useState(false);

  console.log(courseGoals);

  const addGoalHandler = (goalTitle) => {
    if (goalTitle.length === 0) {
      return;
    }
    setCourseGoals((courseGoals) => [
      ...courseGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]); //takes old array and adds to new array
    setIsAddMode(false); // to close modal when course goal is added
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const cancelGoalAdditionHandler = () => {
    setCourseGoals((currentGoals) => {
      setIsAddMode(false);
    });
  };

  return (
    <View style={styles.screen}>
      <Button title="Add new goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalAdditionHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}
//================================styles==========================
const styles = StyleSheet.create({
  screen: { marginTop: 20, padding: 50 },
});
