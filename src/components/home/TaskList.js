import React from "react";
import { View, FlatList, SectionList } from "react-native";
import Task from "./Task";

const TaskList = ({ todoTasks, completedTasks, completeHandler, deleteHandler }) => {
    const todoTasksSection = [{title: 'Todo Tasks', data: todoTasks.map(task => ({ text: task, isCompleted: false }))}]
    const completedTasksSection = [{title: 'Completed Tasks', data: completedTasks.map(task => ({ text: task, isCompleted: true }))}]

    return (
    <View>
      <SectionList
        style={{ paddingTop: 30 }}
        sections={[...todoTasksSection, ...completedTasksSection]}
        renderItem={({ item, index }) => (
          <Task
            key={index}
            index={index}
            text={item.text}
            isCompleted={item.isCompleted}
            completeHandler={completeHandler}
            deleteHandler={deleteHandler}
          />
        )}
      />
    </View>
  );
};

export default TaskList;
