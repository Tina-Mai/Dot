// functional component for each item in the todo list

import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { listItem, dot } from "../../constants";

const Task = ({ index, text, isCompleted, completeHandler, deleteHandler }) => {
  return (
    <View style={{ opacity: isCompleted ? 0.6 : 1 }}>
      <View style={[listItem.wrapper, {flexDirection: 'row'}]}>
        <View style={{ flexDirection: "row", alignItems: "center", flexWrap: "wrap" }}>
          <TouchableOpacity
            style={isCompleted ? dot.complete : dot.todo}
            onPress={() => completeHandler(index, isCompleted)}
          ></TouchableOpacity>
          <Text style={{ maxWidth: "85%" }}>{text}</Text>
        </View>

        <TouchableOpacity onPress={() => deleteHandler(index, isCompleted)}>
          <Text style={{ fontSize: 20 }}>×</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Task;
