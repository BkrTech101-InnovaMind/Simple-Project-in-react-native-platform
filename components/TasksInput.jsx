import { useState } from "react"
import { Alert, Button, TextInput, View } from "react-native"

const TasksInput = ({ onAddTask }) => {
  const [enteredTask, setEnteredTask] = useState("")
  const taskInputHandler = (enteredTask) => {
    setEnteredTask(enteredTask)
  }
  const addTaskHandler = () => {
    if (enteredTask.trim() === "") {
      Alert.alert("Task can't be empty")
    } else {
      onAddTask(enteredTask)
      setEnteredTask("")
    }
  }

  return (
    <View className='flex-row flex-1 justify-between items-center mb-6 border-b-2 border-[#cccccc] '>
      <TextInput
        onChangeText={taskInputHandler}
        className='border-2 border-[#cccccc] w-[70%] mr-2 p-2'
        placeholder='Add Your Task !!'
        value={enteredTask}
      />
      <Button onPress={addTaskHandler} title='Add Task' />
    </View>
  )
}

export default TasksInput
