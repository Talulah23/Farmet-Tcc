import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Approutes from './app.routes';

const Drawer = createDrawerNavigator();

export const screenOptions = {
    headerStyle: {
        backgroundColor: '#66248F',
    },
    headerTintColor: '#FFFFFF',
    
};

function Routes() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home" screenOptions={screenOptions}>
                {Approutes({ Drawer })}
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default Routes;