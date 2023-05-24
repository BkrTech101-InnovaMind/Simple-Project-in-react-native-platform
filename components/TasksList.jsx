import { MaterialIcons } from "@expo/vector-icons"
import { Pressable, Text, View } from "react-native"

const TasksList = ({ itemData, onRemoveTask }) => {
  return (
    <View className=' flex-row-reverse justify-between m-2 p-3 rounded-md bg-[#5e0acc]'>
      <Text className='text-white'>{itemData.item.text}</Text>
      <Pressable onPress={onRemoveTask.bind(this, itemData.item.id)}>
        <MaterialIcons name='highlight-remove' size={24} color='white' />
      </Pressable>
    </View>
  )
}

export default TasksList
