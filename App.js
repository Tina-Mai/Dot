import React from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput } from 'react-native'
import Task from './components/task'

export default function App() {
    return (
        <View style={styles.container}>

            {/* tasks display section */}
            <View style={styles.tasksWrapper}>
                {/* TODO: update this name based on data collected in onboarding later*/}
                <Text style={styles.largeTitle}>Hi Tina</Text>
                <Text style={styles.sectionTitle}>Tina's tasks</Text>

                <View style={styles.items}>
                    
                    {/* tasks here */}
                    <Task text={'feed fish'} />
                    <Task text={'grustle'} />
                    <Task text={'take nap'} />

                </View>

            </View>

            {/* write a task section */}
            <KeyboardAvoidingView   {/* component that automatically adjusts when keyboard shows up */}
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
              style={styles.writeTaskWrapper}
            >

              <TextInput style={styles.input} placeholder={'Write a task'} />

              <TouchableOpacity>
                <View style={styles.addWrapper}>
                  <Text style={styles.addText}>+</Text>  {/* can also use + icon here */}
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
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    items: {
        marginTop: 30
    },
})
