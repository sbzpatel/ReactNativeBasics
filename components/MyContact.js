import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState } from 'react'

const MyContact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    return (
        <SafeAreaView className="flex-1 justify-center items-center bg-gray-200 p-5">
            <View className="bg-white w-96 rounded-lg p-8">
                <Text className="text-4xl font-bold text-center text-green-500 mb-4 shadow-lg">Contact</Text>

                <TextInput
                    placeholder='Enter your name'
                    placeholderTextColor={'#ccc'}
                    className="border border-gray-300 focus:border-green-500 w-full h-12 rounded-lg text-gray-400 px-4 mb-4"
                    value={name}
                    onChangeText={setName}
                />

                <TextInput
                    placeholder='Enter your email'
                    placeholderTextColor={'#ccc'}
                    className="border border-gray-300 focus:border-green-500 w-full h-12 rounded-lg text-gray-400 px-4 mb-4"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <TextInput
                    placeholder='Enter company name'
                    placeholderTextColor={'#ccc'}
                    className="border border-gray-300 focus:border-green-500 w-full h-12 rounded-lg text-gray-400 px-4 mb-4"
                    value={company}
                    onChangeText={setCompany}
                />

                <TextInput
                    placeholder='Enter phone no.'
                    placeholderTextColor={'#ccc'}
                    className="border border-gray-300 focus:border-green-500 w-full h-12 rounded-lg text-gray-400 px-4 mb-4"
                    value={phone}
                    onChangeText={setPhone}
                />

                <TextInput
                    placeholder='Enter message'
                    placeholderTextColor={'#ccc'}
                    className="border border-gray-300 focus:border-green-500 w-full h-50 rounded-lg px-4 mb-4 text-gray-400"
                    value={message}
                    onChangeText={setMessage}
                    multiline={true}
                />

                <TouchableOpacity className="w-full bg-green-500 py-3 rounded-lg">
                    <Text className="text-center text-white text-2xl font-semibold shadow-3xl">Submit</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default MyContact