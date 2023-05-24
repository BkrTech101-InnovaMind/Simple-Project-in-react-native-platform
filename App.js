import { useState } from "react"
import { Alert, FlatList, Text, View } from "react-native"
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
    Alert.alert(
      "Confirmation",
      "Sure to remove the task can't be recovered after confirm ?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            setTasks((currentTasks) => {
              return currentTasks.filter((task) => task.id !== id)
            })
          },
        },
      ],
      { cancelable: true }
    )
  }

  return (
    <View className='pt-14 px-4 flex-1'>
      <TasksInput onAddTask={addTasksHandler} />
      <View className='flex-[5]'>
        {tasks.length === 0 ? (
          <Text>Let's go to add the first task for today 😍</Text>
        ) : (
          <FlatList
            data={tasks}
            keyExtractor={(item) => {
              return item.id
            }}
            renderItem={(itemData) => {
              return (
                <TasksList
                  itemData={itemData}
                  onRemoveTask={removeTaskHandler}
                />
              )
            }}
          />
        )}
      </View>
    </View>
  )
}
