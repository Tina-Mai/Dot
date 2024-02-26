// functional component for each item in the todo list

import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles/Task.style";

const Task = ({ index, text, isCompleted, completeHandler, deleteHandler }) => {
  return (
    <View style={{ opacity: isCompleted ? 0.6 : 1 }}>
      <View style={styles.item}>
        <View style={styles.itemLeft}>
          <TouchableOpacity
            style={isCompleted ? styles.squareComplete : styles.square}
            onPress={() => completeHandler(index, isCompleted)}
          ></TouchableOpacity>
          <Text style={styles.itemText}>{text}</Text>
        </View>

        <TouchableOpacity onPress={() => deleteHandler(index, isCompleted)}>
          <Text style={styles.deleteIcon}>×</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Task;
