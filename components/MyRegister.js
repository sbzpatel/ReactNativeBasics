import { View, Text, TextInput, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const MyRegister = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("Male");

    return (
        <SafeAreaView className="flex-1 items-center justify-center bg-gray-200">
            <View className="bg-white w-96 rounded-lg p-8">
                <Text className="text-center text-3xl text-green-500 mb-4">Register</Text>

                <TextInput
                    placeholder='Enter first name'
                    placeholderTextColor={"#ddd"}
                    className="rounded-lg border border-gray-300 focus:border-green-600 p-4 text-lg mb-4"
                    value={firstName}
                    onChangeText={(text) => setFirstName(text)}
                />

                <TextInput
                    placeholder='Enter last name'
                    placeholderTextColor={"#ddd"}
                    className="rounded-lg border border-gray-300 focus:border-green-600 p-4 text-lg mb-4"
                    value={lastName}
                    onChangeText={(text) => setLastName(text)}
                />

                <TextInput
                    placeholder='Enter Email Id'
                    placeholderTextColor={"#ddd"}
                    className="rounded-lg border border-gray-300 focus:border-green-600 p-4 text-lg mb-4"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    keyboardType='email-address'
                    autoCapitalize='none'
                />

                <TextInput
                    placeholder='Enter Password'
                    placeholderTextColor={"#ddd"}
                    className="rounded-lg border border-gray-300 focus:border-green-600 p-4 text-lg mb-4"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry={true}
                    autoCapitalize='none'
                />

                <View className="flex-row items-center mb-4">
                    <View className="border border-gray-300 rounded-full w-13 h-13 p-2">
                        <TouchableOpacity
                            className={`w-9 h-9 rounded-full ${gender === "Male" ? "bg-green-300" : ""}`}
                            onPress={() => setGender("Male")}
                        ></TouchableOpacity>
                    </View>
                    <Text className="text-lg ml-4 mr-4">Male</Text>

                    <View className="border border-gray-300 rounded-full w-13 h-13 p-2">
                        <TouchableOpacity
                            className={`w-9 h-9 rounded-full ${gender === "Female" ? "bg-green-300" : ""}`}
                            onPress={() => setGender("Female")}
                        ></TouchableOpacity>
                    </View>
                    <Text className="text-lg ml-4">Female</Text>
                </View>


                <TouchableOpacity className="bg-green-500 p-4 rounded-lg mb-4">
                    <Text className="text-white text-center text-xl font-semibold">Register Now</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text className="text-green-600 text-lg font-semibold text-center mb-4">Login</Text>
                </TouchableOpacity>

                <View className="justify-center flex-row">
                    <Text className="text-green-600 text-lg font-semibold">Forgot Password?</Text>
                    <TouchableOpacity>
                        <Text className="text-green-600 text-lg font-semibold"> Click Here</Text>
                    </TouchableOpacity>
                </View>


            </View>
        </SafeAreaView>
    )
}

export default MyRegister