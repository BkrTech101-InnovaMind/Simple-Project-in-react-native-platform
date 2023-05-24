import { useState } from "react"
import { FlatList, View } from "react-native"
import TasksInput from "./components/TasksInput"
import TasksList from "./components/TasksList"

export default function App() {
  const [tasks, setTasks] = useState([])

  const addTasksHandler = (enteredTask) => {
    setTasks((currentTasks) => [
      ...currentTasks,
      { id: Math.random().toString(), text: enteredTask },
    ])
  }

  const removeTaskHandler = (id) => {
    setTasks((currentTasks) => {
      return currentTasks.filter((task) => task.id !== id)
    })
  }

  return (
    <View className='pt-14 px-4 flex-1'>
      <TasksInput onAddTask={addTasksHandler} />
      <View className='flex-[5]'>
        <FlatList
          data={tasks}
          keyExtractor={(item) => {
            return item.id
          }}
          renderItem={(itemData) => {
            return (
              <TasksList itemData={itemData} onRemoveTask={removeTaskHandler} />
            )
          }}
        />
      </View>
    </View>
  )
}
