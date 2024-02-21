import React from "react";
import { View, FlatList } from "react-native";
import Task from "./Task";

const TaskList = ({ todoTasks, completedTasks, completeHandler, deleteHandler }) => {
  return (
    <View>
      <FlatList
        style={{ paddingTop: 30 }}
        data={todoTasks}
        renderItem={({ item, index }) => (
          <Task
            key={index}
            index={index}
            text={item}
            isCompleted={false}
            completeHandler={completeHandler}
            deleteHandler={deleteHandler}
          />
        )}
        contentContainerStyle={{ columnGap: 15, flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      />
      <FlatList
        data={completedTasks}
        renderItem={({ item, index }) => (
          <Task
            key={index}
            index={index}
            text={item}
            isCompleted={true}
            completeHandler={completeHandler}
            deleteHandler={deleteHandler}
          />
        )}
        contentContainerStyle={{ columnGap: 15, flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      />
    </View>
  );
};

export default TaskList;
