import React, { useState, useEffect } from "react";
import { View, Keyboard } from "react-native";
import Header from "../components/Home/Header";
import TaskList from "../components/Home/TaskList";
import SearchBar from '../components/Home/SearchBar';
import AddTaskBar from '../components/Home/AddTaskBar';
import { screen } from '../constants/styles';

export default function Home() {
  const [todoTasks, setTodoTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [filteredTodoTasks, setFilteredTodoTasks] = useState([]);
  const [filteredCompletedTasks, setFilteredCompletedTasks] = useState([]);
  const [search, setSearch] = useState("");

  // adds a new task to list of todoTasks
  const handleAddTask = (task) => {
    Keyboard.dismiss()
    const newTodoTasks = [...todoTasks, task];
    setTodoTasks(newTodoTasks);
  };

  // deletes task from either completeTasks list or todoTasks list
  const handleDeleteTask = (index, isCompleted) => {
    // modularizing!
    const list = isCompleted ? completedTasks : todoTasks;
    const setter = isCompleted ? setCompletedTasks : setTodoTasks;

    let itemsCopy = [...list];
    itemsCopy.splice(index, 1);
    setter(itemsCopy);
  };

  // checks/completes task if previously not complete, unchecks task if already complete
  const handleCompleteTask = (index, isCompleted) => {
    const list = isCompleted ? completedTasks : todoTasks;
    const setter = isCompleted ? setCompletedTasks : setTodoTasks;
    const otherList = isCompleted ? todoTasks : completedTasks;
    const otherSetter = isCompleted ? setTodoTasks : setCompletedTasks;

    let item = list[index];
    let itemsCopy = [...list];
    itemsCopy.splice(index, 1);
    setter(itemsCopy);
    otherSetter([...otherList, item]);
  };

  // filters the tasks you see depending on what's in the search bar
  const handleSearchTask = (searchPhrase) => {
    setSearch(searchPhrase);

    const filteredTodoTasks = todoTasks.filter((task) =>
        (task.toLowerCase()).includes(searchPhrase.toLowerCase())
    );
    const filteredCompletedTasks = completedTasks.filter((task) =>
        (task.toLowerCase()).includes(searchPhrase.toLowerCase())
    );

    setFilteredTodoTasks(filteredTodoTasks);
    setFilteredCompletedTasks(filteredCompletedTasks);
  }; 

  // refresh
  useEffect(() => {
    const filteredNewTodoTasks = todoTasks.filter((task) =>
      (task.toLowerCase()).includes(search.toLowerCase())
    );
    const filteredNewCompletedTasks = completedTasks.filter((task) =>
      (task.toLowerCase()).includes(search.toLowerCase())
    );
  
    setFilteredTodoTasks(filteredNewTodoTasks);
    setFilteredCompletedTasks(filteredNewCompletedTasks);
  }, [todoTasks, completedTasks, search]);  

  return (
    <View style={screen.container}>
      <View style={{ flex: 1 }}>
        {/* header section */}
        <Header />

        {/* search tasks section */}
        <SearchBar text={search} searchHandler={handleSearchTask} />

        {/* task list section */}
        <TaskList todoTasks={todoTasks} completedTasks={completedTasks} filteredTodoTasks={filteredTodoTasks} filteredCompletedTasks={filteredCompletedTasks} completeHandler={handleCompleteTask} deleteHandler={handleDeleteTask} />
      </View>

      {/* add a task section */}
      <AddTaskBar addHandler={handleAddTask} />

    </View>
  );
}
