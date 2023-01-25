import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Switch, Text, View } from 'react-native';
import { useColorScheme } from 'nativewind';
import ProductList from './components/ProductsLists';
export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <SafeAreaView className='flex-1 justify-center items-center bg-gray-200 dark:bg-black '>
      <View className='flex-row w-full gap-5 '>
        <Text className='dark:text-white text-2xl font-bold '>
          New collection
        </Text>
        <Switch
          value={colorScheme === 'dark'}
          onValueChange={toggleColorScheme}
        />
      </View>
      <ProductList />
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
    </SafeAreaView>
  );
}
