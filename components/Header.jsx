import { Entypo } from "@expo/vector-icons"
import {
  HeaderButton,
  HeaderTitle,
  HeaderView,
  colors,
} from "../styles/appStyles"
export default function Header({ handleClearToDos }) {
  return (
    <HeaderView>
      <HeaderTitle>ToDos</HeaderTitle>
      <HeaderButton
        onPress={() => {
          handleClearToDos()
        }}
      >
        <Entypo name='trash' size={25} color={colors.tertiary} />
      </HeaderButton>
    </HeaderView>
  )
}
