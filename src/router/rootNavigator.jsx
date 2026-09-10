import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CharacterDetails from '../screens/characters/characterDetail';
import FilterCharacters from '../screens/FilterCharacters';
import SearchCharacters from '../screens/characters/SearchCharacters';
import { CHARACTERDETAILS, FILTERCHARACTERS, SEARCHCHARACTERS } from '../utils/rootes';
const Stack = createNativeStackNavigator();





const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={CHARACTERDETAILS} component={CharacterDetails} />
      <Stack.Screen name={FILTERCHARACTERS} component={FilterCharacters} />
      <Stack.Screen name={SEARCHCHARACTERS} component={SearchCharacters} />
    </Stack.Navigator>
  )
}

export default RootNavigator