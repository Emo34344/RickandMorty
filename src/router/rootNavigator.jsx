import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CharacterDetail from '../screens/characters/characterDetail';
import FilterCharacters from '../screens/characters/FilterCharacters';
import SearchCharacters from '../screens/characters/SearchCharacters';
import { CHARACTERDETAILS, FILTERCHARACTERS, SEARCHCHARACTERS, TABNAVİGATOR } from '../utils/rootes';
const Stack = createNativeStackNavigator();
import Colors from '../theme/colors';
import TabRouter from './tabRouter';





const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.BACKGROUNDCOLOR
        },
        headerBackTitle: 'Back',
      }}
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name={TABNAVİGATOR}
        component={TabNavigator}
      />

      <Stack.Screen name={CHARACTERDETAILS} component={CharacterDetails} />
      <Stack.Screen name={FILTERCHARACTERS} component={FilterCharacters} />
      <Stack.Screen name={SEARCHCHARACTERS} component={SearchCharacters} />
    </Stack.Navigator>
  )
}

export default RootNavigator