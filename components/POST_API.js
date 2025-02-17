import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, {useState} from 'react';
import ExStyles from './css/ExStyles';
import axios from 'axios';

const POST_API = () => {
    const [formData, setFormData] = useState({
        name: "", 
        email: "",
        gender: "",
        age: "",
        married: true
    });

    const URL = "http://10.0.2.2:3000/users";

    const handleFormSubmit = async () => {
        // console.log("handleFormSubmit calling...");
        console.log(formData);
        try {
            const response = await axios.post(URL, formData);
            console.log(response.data);
            Alert.alert("Success", "Data added Successfully!!!");
            setFormData({
                name: "", 
                email: "",
                gender: "",
                age: "",
                married: true
            });
        } catch(err) {
            console.log("Error:", err);
        }
    }

    return (
        <View>
            <Text style={{ ...ExStyles.heading, marginVertical: 15 }}>POST API</Text>

            <TextInput
                placeholder='Enter your name'
                value={formData.name}
                onChangeText={(val) => setFormData({...formData, name: val})}
                style={ExStyles.textInput}
            />

            <TextInput
                placeholder='Enter your email'
                value={formData.email}
                onChangeText={(val) => setFormData({...formData, email: val})}
                style={ExStyles.textInput}
            />

            <TextInput
                placeholder='Enter your gender'
                value={formData.gender}
                onChangeText={(val) => setFormData({...formData, gender: val})}
                style={ExStyles.textInput}
            />

            <TextInput
                placeholder='Enter your age'
                value={formData.age}
                onChangeText={(val) => setFormData({...formData, age: val})}
                style={ExStyles.textInput}
            />

            <TouchableOpacity onPress={handleFormSubmit} style={{margin: 10}}>
                <Text style={ExStyles.custombtn}>Submit</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { setFormData({name: "", email: "", gender: "", age: "", married: true}) }} style={{margin: 10}}>
                <Text style={{...ExStyles.custombtn, backgroundColor: "red"}}>Clear Data</Text>
            </TouchableOpacity>
        </View>
    )
}

export default POST_API