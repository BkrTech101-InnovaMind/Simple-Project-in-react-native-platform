import { Entypo } from "@expo/vector-icons"
import { useState } from "react"
import { Alert } from "react-native"
import { SwipeListView } from "react-native-swipe-list-view"
import {
  HiddenButton,
  ListView,
  ListViewHidden,
  SwipedTodoText,
  TodoDate,
  TodoText,
  colors,
} from "../styles/appStyles"

export default function ListItems({ toDos, setToDos }) {
  const [swipeRow, setSwipeRow] = useState(null)

  const handleDeleteToDo = (rowKey) => {
    const newToDos = [...toDos]
    const toDosIndex = toDos.findIndex((todo) => todo.key === rowKey)
    newToDos.splice(toDosIndex, 1)
    const response = Alert.alert(
      "Are you sure you want to remove this mission",
      "This action can't be recovered",
      [
        {
          text: "Yes",
          onPress: async () => {
            setToDos(newToDos)

            try {
              await AsyncStorage.setItem("tasks", JSON.stringify(newToDos))
            } catch (error) {
              console.error("Error saving tasks to storage:", error)
            }
          },
        },
        {
          text: "No",
          onPress: () => {
            Alert.alert("Deletion canceled")
          },
        },
      ]
    )
  }

  return (
    <>
      {toDos.length == 0 && (
        <TodoText>What are you planing for today 😎</TodoText>
      )}
      {toDos.length != 0 && (
        <SwipeListView
          data={toDos}
          renderItem={(data) => {
            const RowText =
              data.item.key == swipeRow ? SwipedTodoText : TodoText
            return (
              <ListView underlayColor={colors.primary} onPress={() => {}}>
                <>
                  <RowText>{data.item.title}</RowText>
                  <TodoDate>{data.item.date}</TodoDate>
                </>
              </ListView>
            )
          }}
          renderHiddenItem={(data, rowMap) => {
            return (
              <ListViewHidden>
                <HiddenButton
                  onPress={() => handleDeleteToDo(rowMap, data.item.key)}
                >
                  <Entypo name='trash' size={25} color={colors.secondary} />
                </HiddenButton>
              </ListViewHidden>
            )
          }}
          leftOpenValue={80}
          previewRowKey={"1"}
          previewOpenValue={80}
          previewOpenDelay={3000}
          disableLeftSwipe={true}
          showsVerticalScrollIndicator={false}
          className='flex-1 pb-8 mb-10'
          onRowOpen={(rowKey) => {
            setSwipeRow(rowKey)
          }}
          onRowClose={() => {
            setSwipeRow(null)
          }}
        />
      )}
    </>
  )
}
