import React, {useState} from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, Touchable } from 'react-native'
import Task from './components/task'

export default function App() {
    const [task, setTask] = useState()  // create a state
    const [taskItems, setTaskItems] = useState([])  // default value is [] (empty array)

    const handleAddTask = () => {
      Keyboard.dismiss()
      setTaskItems([...taskItems, task])  // creates a new array of everything in already taskItems + task
      setTask(null)  // so that text input area empties
    }

    const completeTask = (index) => {
      let itemsCopy = [...taskItems]  // creates a new array of everything in taskItems
      itemsCopy.splice(index, 1)
      setTaskItems(itemsCopy)
    }

    return (
        <View style={styles.container}>

            {/* tasks display section */}
            <View style={styles.tasksWrapper}>
                {/* TODO: update this name based on data collected in onboarding later*/}
                <Text style={styles.largeTitle}>Hi Tina</Text>
                <Text style={styles.sectionTitle}>Today's tasks</Text>

                <View style={styles.items}>
                    
                    {/* tasks show up here */}
                    {
                      taskItems.map((item, index) => {
                        return (
                          <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                            <Task text={item} />
                          </TouchableOpacity>
                        )
                      })
                    }

                </View>

            </View>

            {/* add a task section */}
            {/* KeyboardAvoidingView: component that automatically adjusts when keyboard shows up */}
            <KeyboardAvoidingView
              // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={styles.inputTaskWrapper}
            >

              <TextInput 
                style={styles.inputTaskText} 
                placeholder={'Write a task'} 
                value={task}
                onChangeText={text => setTask(text)}
              />

              <TouchableOpacity onPress={() => handleAddTask()}>
                <View style={styles.addWrapper}>
                  <Text style={styles.addText}>+</Text>
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
    },
    tasksWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    largeTitle: {
      fontSize: 35,
      fontWeight: 'bold',
      paddingBottom: 15,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    items: {
      marginTop: 30
    },
    inputTaskWrapper: {
      position: 'absolute',
      bottom: 60,
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
      // borderColor: '#C0C0C0',
      // borderWidth: 1,
      width: 250,
    },
    addWrapper: {
      width: 60,
      height: 60,
      backgroundColor: '#FFFFFF',
      borderRadius: 60,
      justifyContent: 'center',
      alignItems: 'center',
      // borderColor: '#C0C0C0',
      // borderWidth: 1,
    },
    addText: {

    },
})
