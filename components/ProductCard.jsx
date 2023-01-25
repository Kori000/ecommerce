import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { antDesign } from '@expo/vector-icons';
import { useColorScheme } from 'nativewind';

const ProductCard = ({ image, category, title, price, description }) => {
  const [count, setCount] = React.useState(1);
  const { colorScheme } = useColorScheme();
  return (
    <View className='w-full bg-white dark:bg-gray-50/10 rounded-3xl p-5 my-5 '>
      <View className='bg-white rounded-xl '>
        <Image
          source={{ uri: image }}
          className='w-full h-72'
          style={{ resizeMode: 'contain' }}
        />
      </View>
      <View>
        <Text>{category}</Text>
        <Text>{title}</Text>
        <Text>{description}</Text>
        <Text>{price}</Text>
      </View>
    </View>
  );
};

export default ProductCard;
