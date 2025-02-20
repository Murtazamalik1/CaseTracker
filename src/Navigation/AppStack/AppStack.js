import { createStackNavigator } from '@react-navigation/stack';
import OnBoardingScreen from '../../Screens/OnBoarding/OnBoarding';

const Stack = createStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="OnBoard" component={OnBoardingScreen} />
        </Stack.Navigator>
    );
};

export default AppStack;
