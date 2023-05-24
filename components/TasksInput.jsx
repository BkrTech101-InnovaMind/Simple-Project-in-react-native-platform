import { useState } from "react"
import { Alert, Button, Modal, TextInput, View } from "react-native"

const TasksInput = ({ onAddTask, visible, onCancel }) => {
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
    <Modal visible={visible} animationType='slide'>
      <View className='flex-1 justify-center items-center mb-6 border-b-2 border-[#cccccc] p-4'>
        <TextInput
          focusable={true}
          onChangeText={taskInputHandler}
          className='border-2 border-[#cccccc] w-[70%] p-2'
          placeholder='Add Your Task !!'
          value={enteredTask}
        />
        <View className='flex-row-reverse top-3'>
          <View className='w-[100px] mx-2'>
            <Button onPress={addTaskHandler} title='Add Task' />
          </View>
          <View className='w-[100px] mx-2'>
            <Button title='Cancel' onPress={onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default TasksInput
