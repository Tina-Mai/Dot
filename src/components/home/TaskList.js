import React from "react";
import { SectionList } from "react-native";
import Task from "./Task";

const TaskList = ({ todoTasks, completedTasks, filteredTodoTasks, filteredCompletedTasks, completeHandler, deleteHandler }) => {
    const todoTasksSection = [{title: 'Todo Tasks', data: filteredTodoTasks.map(task => ({ text: task, isCompleted: false }))}]
    const completedTasksSection = [{title: 'Completed Tasks', data: filteredCompletedTasks.map(task => ({ text: task, isCompleted: true }))}]

    return (
      <SectionList
        style={{ paddingTop: 30, overflow: 'visible' }}
        sections={[...todoTasksSection, ...completedTasksSection]}
        renderItem={({ item }) => {
            const index = item.isCompleted
              ? completedTasks.findIndex(task => task === item.text)
              : todoTasks.findIndex(task => task === item.text);
    
            return (
              <Task
                key={index}
                index={index}
                text={item.text}
                isCompleted={item.isCompleted}
                completeHandler={completeHandler}
                deleteHandler={deleteHandler}
              />
            );
        }}
        contentContainerStyle={{ paddingBottom: 30 }}
      />
  );
};

export default TaskList;
