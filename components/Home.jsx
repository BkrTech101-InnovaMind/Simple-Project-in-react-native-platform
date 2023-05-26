import { useState } from "react"
import Header from "./Header"
import ListItems from "./ListItems"
import ToDosInput from "./ToDosInput"

export default function Home() {
  // initial TODOs
  const toDosList = []

  const [toDos, setToDos] = useState(toDosList)

  const [inputVisibility, setInputVisibility] = useState(false)

  const [inputValue, setInputValue] = useState()

  const handleClearToDos = () => {
    setToDos([])
  }

  const handleNewToDos = (toDo) => {
    const newToDos = [...toDos, toDo]
    setToDos(newToDos)
    setInputVisibility(false)
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
