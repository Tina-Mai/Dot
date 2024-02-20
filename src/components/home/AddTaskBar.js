import React, { useState } from "react";
import { View, Text, KeyboardAvoidingView, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { COLORS, SHADOWS } from "../../constants";

const AddTaskBar = ({ addHandler }) => {
  const [task, setTask] = useState();

  return (
    <KeyboardAvoidingView
      // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      behavior={"padding"}
      style={styles.inputTaskWrapper}
      contentContainerStyle={{ paddingBottom: 15 }}
    >
      <View style={{ width: "75%" }}>
        <TextInput
          style={styles.inputTaskText}
          placeholder={"Add a task"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
      </View>

      <TouchableOpacity
        onPress={() => {
          addHandler(task);
          setTask(null);
        }}
      >
        <View style={styles.addWrapper}>
          <Text style={styles.addIcon}>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  inputTaskWrapper: {
    // position: 'absolute',
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around", // as opposed to 'space-between'
    alignItems: "center",
  },
  inputTaskText: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFFFFF",
    borderRadius: 60,
    // width: '75%',
    shadowColor: "#2E303F",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
  },
  addWrapper: {
    width: 55,
    height: 55,
    backgroundColor: "#B6594C",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#2E303F",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
  },
  addIcon: {
    fontSize: 25,
    color: "#FFFFFF",
  },
});

export default AddTaskBar;
