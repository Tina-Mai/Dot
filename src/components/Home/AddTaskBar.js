import React, { useState } from "react";
import { View, Text, KeyboardAvoidingView, TouchableOpacity, TextInput } from "react-native";
import { inputArea, buttons } from "../../constants";

const AddTaskBar = ({ addHandler }) => {
  const [task, setTask] = useState("");

  return (
    <KeyboardAvoidingView
      // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      behavior={"padding"}
      flexDirection={"column"}
    >
        {/* text input area */}
        <View style={inputArea.wrapper}>
        <View style={{ width: "75%" }}>
          <TextInput
            style={inputArea.text}
            placeholder={"add a task"}
            value={task}
            onChangeText={(text) => setTask(text)}
            autoCapitalize="none"
          />
        </View>

        {/* add button */}
        <TouchableOpacity
          onPress={() => {
            if (task !== "") {
              addHandler(task);
              setTask(null);
            }
          }}
        >
          <View style={buttons.circleButtonWrapper}>
            <Text style={buttons.circleButtonIcon}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ height: 15 }} />
    </KeyboardAvoidingView>
  );
};

export default AddTaskBar;
