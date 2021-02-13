import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal } from "react-native";

const goalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  //function in js
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonSize}>
            <Button
              title="Add"
              style={styles.btnAdd}
              onPress={props.onCancel}
            />
          </View>
          <View>
            <Button title="Cancel" color="red" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
  inputContainer: {
    //flexDirection: "column", //allign in a column
    flex: 1,
    justifyContent: "center", // brings to middle and leaves space around
    alignItems: "center", //brings all content to middle
    marginBottom: 20,
  },
  btnAdd: {
    marginTop: 10,
    paddingHorizontal: 10,
    width: 20,
  },
  buttonContainer: {
    width: "40%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonSize: {
    width: "40%",
  },
});

export default goalInput;
