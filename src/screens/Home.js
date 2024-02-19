import React, {useState} from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, FlatList } from 'react-native'
import Task from '../components/Task'

export default function Home() {
    const [task, setTask] = useState()  // create a state
    const [todoItems, setTodoItems] = useState([])  // default value is [] (empty array)
    const [search, onChangeSearch] = useState()

    const handleAddTask = () => {
      Keyboard.dismiss()
      setTodoItems([...todoItems, task])  // creates a new array of everything in already taskItems + task
      setTask(null)  // so that text input area empties
    }

    const handleDeleteTask = (index) => {
      let itemsCopy = [...todoItems]
      itemsCopy.splice(index, 1)
      setTodoItems(itemsCopy)
    }

    const findTask = (searchPhrase) => {
      
    }

    return (
        <View style={styles.container}>

          {/* TODO: update this name based on data collected in onboarding later*/}
          <Text style={styles.largeTitle}>Hi Tina</Text>

          <Text style={styles.sectionTitle}>To-do</Text>
          
          <TextInput 
            style={styles.inputTaskText} 
            placeholder={'Find a task...'} 
            value={search}
            onChangeText={text => onChangeSearch(text)}
          />

          {/* todo tasks show up here */}
          <FlatList
            style={{ paddingTop: 30 }}
            data={todoItems}
            renderItem={({ item, index }) => (
              <Task key={index} index={index} text={item} deleteHandler={handleDeleteTask} />
            )}
            contentContainerStyle={{ columnGap: 15, flexGrow: 1 }}
            keyboardShouldPersistTaps='handled'
          />

          {/* <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps='handled'
          >
              <View style={styles.items}>
                  {
                    todoItems.map((item, index) => {
                      return (
                        <Task key={index} index={index} text={item} deleteHandler={handleDeleteTask} />
                      )
                    })
                  }
              </View>
          </ScrollView> */}
          
          {/* add a task section */}
          <KeyboardAvoidingView
            // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.inputTaskWrapper}
          >
            <View style={{width: '75%'}}>
              <TextInput 
                style={styles.inputTaskText} 
                placeholder={'Add a task'} 
                value={task}
                onChangeText={text => setTask(text)}
              />
            </View>

            <TouchableOpacity onPress={() => handleAddTask()}>
              <View style={styles.addWrapper}>
                <Text style={styles.addIcon}>+</Text>
              </View>
            </TouchableOpacity>
            
          </KeyboardAvoidingView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F5F1',
        paddingHorizontal: 20,
    },
    largeTitle: {
      fontSize: 35,
      fontWeight: 'bold',
      paddingTop: 80,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      paddingVertical: 15,
    },
    items: {
      marginTop: 30
    },
    inputTaskWrapper: {
      // position: 'absolute',
      paddingBottom: 60,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around', // as opposed to 'space-between'
      alignItems: 'center',
    },
    inputTaskText: {
      paddingVertical: 15,
      paddingHorizontal: 15,
      backgroundColor: '#FFFFFF',
      borderRadius: 60,
      // width: '75%',
      shadowColor: '#2E303F',
      shadowOffset: {width: 3, height: 3},
      shadowOpacity: 0.08,
      shadowRadius: 20,
    },
    addWrapper: {
      width: 55,
      height: 55,
      backgroundColor: '#B6594C',
      borderRadius: 60,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#2E303F',
      shadowOffset: {width: 3, height: 3},
      shadowOpacity: 0.08,
      shadowRadius: 20,
    },
    addIcon: {
      fontSize: 25,
      color: '#FFFFFF'
    },
})
