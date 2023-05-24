import { MaterialIcons } from "@expo/vector-icons"
import { Pressable, StyleSheet, Text, View } from "react-native"

const TasksList = ({ itemData, onRemoveTask }) => {
  return (
    <View>
      <Pressable
        className=' flex-row-reverse justify-between m-2 p-3 rounded-md bg-[#5e0acc]'
        onPress={onRemoveTask.bind(this, itemData.item.id)}
        android_ripple={{ color: "#2f0d5b", radius: 999 }}
        style={({ pressed }) => pressed && styles.pressedButton}
      >
        <Text className='text-white'>{itemData.item.text}</Text>
        <MaterialIcons name='highlight-remove' size={24} color='white' />
      </Pressable>
    </View>
  )
}

export default TasksList

const styles = StyleSheet.create({
  pressedButton: {
    opacity: 0.5,
  },
})
