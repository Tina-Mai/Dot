import React from "react";
import { SectionList } from "react-native";
import Task from "./Task";

const TaskList = ({ todoTasks, completedTasks, completeHandler, deleteHandler }) => {
    const todoTasksSection = [{title: 'Todo Tasks', data: todoTasks.map(task => ({ text: task, isCompleted: false }))}]
    const completedTasksSection = [{title: 'Completed Tasks', data: completedTasks.map(task => ({ text: task, isCompleted: true }))}]

    return (
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
        contentContainerStyle={{ paddingBottom: 30 }}
      />
  );
};

export default TaskList;
