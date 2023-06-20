import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";
import AddScreen from "../screens/AddScreen";
import { Button } from "react-native";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={({ navigation }) => ({
            title: "Todos",
            headerRight: () => (
              <Button
                title='Add'
                onPress={() => navigation.navigate("Add")}
                color='#B8A2FF'
              />
            ),
          })}
        />
        <Stack.Screen
          name='Detail'
          component={DetailScreen}
          options={({ route }) => ({
            title: route.params.title,
          })}
        />
        <Stack.Screen
          name='Add'
          component={AddScreen}
          options={({ navigation }) => ({
            presentation: "modal",
            title: "New Todo",
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
