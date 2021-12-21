import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import Signin from "../components/Signin";
import Signup from "../components/Signup";
import { useUser } from "../hooks/useUser";
import Library from "../screens/Library";
import { Image } from 'react-native';



const Stack = createStackNavigator();

export default function LibraryNavigation() {
    const { isLogged } = useUser();
    return (
        <Stack.Navigator>
            {
                isLogged ?
                    <>
                        <Stack.Screen name="Library" component={Library} options={{

                            headerTitleStyle: {
                                color: "#fff",
                                fontFamily: "poppins-semi",
                            },
                            headerShadowVisible: false,
                            headerTitle: "Biblioteca",
                            headerTitleAlign: "center",
                            headerStyle: {
                                backgroundColor: "#242143",
                                borderBottomLeftRadius: 24,
                                borderBottomRightRadius: 24,
                                height: 100,
                            },
                        }} />

                    </> :
                    <>
                        <Stack.Screen name="Signin" component={Signin} options={{
                            headerShown: false
                        }} />
                        <Stack.Screen name="Signup" component={Signup} options={{
                            headerShown: false
                        }} />
                    </>
            }
        </Stack.Navigator>
    )
}


const renderBooks = () => (
    <Image
        source={require("../assets/library.png")}
        style={{ width: 25, height: 25 }}
    />
);