import { NavigationContainer } from '@react-navigation/native';
import TabRouter from '../src/router/tabRouter';

const App = () => {
  return (
    <NavigationContainer>
      <TabRouter />
    </NavigationContainer>
  );
};

export default App;