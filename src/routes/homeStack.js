
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ title: 'Signup' }}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;