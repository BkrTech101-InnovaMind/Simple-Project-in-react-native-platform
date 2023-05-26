import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"
import Header from "./Header"
import ListItems from "./ListItems"
import ToDosInput from "./ToDosInput"

export default function Home() {
  // initial TODOs
  const toDosList = []

  const [toDos, setToDos] = useState(toDosList)

  const [inputVisibility, setInputVisibility] = useState(false)

  const [inputValue, setInputValue] = useState()

  useEffect(() => {
    loadTasksFromStorage()
  }, [])

  const loadTasksFromStorage = async () => {
    try {
      const storedTasks = await AsyncStorage.getItem("tasks")
      if (storedTasks !== null) {
        setToDos(JSON.parse(storedTasks))
      }
    } catch (error) {
      console.error("Error loading tasks from storage:", error)
    }
  }

  const handleClearToDos = async () => {
    setToDos([])

    try {
      await AsyncStorage.setItem("tasks", JSON.stringify([]))
    } catch (error) {
      console.error("Error saving tasks to storage:", error)
    }
  }

  const handleNewToDos = async (toDo) => {
    const newToDos = [...toDos, toDo]
    setToDos(newToDos)
    setInputVisibility(false)

    try {
      await AsyncStorage.setItem("tasks", JSON.stringify(newToDos))
    } catch (error) {
      console.error("Error saving tasks to storage:", error)
    }
  }

  return (
    <>
      <Header handleClearToDos={handleClearToDos} />
      <ListItems toDos={toDos} setToDos={setToDos} />
      <ToDosInput
        inputVisibility={inputVisibility}
        setInputVisibility={setInputVisibility}
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleNewToDos={handleNewToDos}
        toDosList={toDosList}
      />
    </>
  )
}
