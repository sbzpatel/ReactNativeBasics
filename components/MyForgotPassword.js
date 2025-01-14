import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const MyForgotPassword = () => {
    const [email, setEmail] = useState("");

    return (
        <View className="flex-1 justify-center items-center p-4">
            <View className="bg-white w-full rounded-lg p-4">
                <Text className="text-center text-green-500 text-3xl mb-4 font-semibold">Forgot Password</Text>

                <TextInput
                    placeholder='Enter Email Id'
                    placeholderTextColor={"#ddd"}
                    className="rounded-lg border border-gray-300 focus:border-green-600 p-4 text-lg mb-4"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    keyboardType='email-address'
                    autoCapitalize='none'
                />

                <TouchableOpacity className="bg-green-600 rounded-lg p-4 mb-4">
                    <Text className="text-center text-xl font-semibold text-white">Reset Password</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text className="text-green-600 text-lg font-semibold text-center mb-4">Login</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text className="text-green-600 text-lg font-semibold text-center mb-4">Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MyForgotPassword