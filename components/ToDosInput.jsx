import { AntDesign } from "@expo/vector-icons"
import { Alert, Modal } from "react-native"
import {
  HeaderTitle,
  ModalAction,
  ModalActionGroup,
  ModalButton,
  ModalContainer,
  ModalIcon,
  ModalView,
  StyledInput,
  colors,
} from "../styles/appStyles"

export default function ToDosInput({
  inputVisibility,
  setInputVisibility,
  inputValue,
  setInputValue,
  handleNewToDos,
  // ! toDosList,
}) {
  const handleClose = () => {
    setInputVisibility(false)
    setInputValue("")
  }

  const handleSubmit = () => {
    Alert.alert("New Mission has been added ✅")
    handleNewToDos({
      title: inputValue,
      date: new Date().toUTCString(),
      key: new Date().getTime().toString(),
      // key: `${
      //   (toDosList[toDosList.length - 1] &&
      //     parseInt(toDosList[toDosList.length - 1].key) + 1) ||
      //   1
      // }`,
    })
    setInputValue("")
  }

  return (
    <>
      <ModalButton onPress={() => setInputVisibility(true)}>
        <AntDesign name='plus' size={30} color={colors.secondary} />
      </ModalButton>
      <Modal
        animationType='slide'
        transparent={true}
        visible={inputVisibility}
        onRequestClose={handleClose}
      >
        <ModalContainer>
          <ModalView>
            <ModalIcon>
              <HeaderTitle>New Mission</HeaderTitle>
            </ModalIcon>
            <StyledInput
              placeholder='Add a new mission for today'
              placeholderTextColor={colors.alternative}
              selectionColor={colors.secondary}
              autoFocus={true}
              onChangeText={(text) => setInputValue(text)}
              value={inputValue}
              onSubmitEditing={handleSubmit}
            />
            <ModalActionGroup>
              <ModalAction color={colors.primary} onPress={handleClose}>
                <AntDesign name='close' size={28} color={colors.tertiary} />
              </ModalAction>
              <ModalAction color={colors.tertiary} onPress={handleSubmit}>
                <AntDesign
                  className='bg-transparent'
                  name='check'
                  size={30}
                  color={colors.secondary}
                />
              </ModalAction>
            </ModalActionGroup>
          </ModalView>
        </ModalContainer>
      </Modal>
    </>
  )
}
