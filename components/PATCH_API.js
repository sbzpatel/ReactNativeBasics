import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, {useState} from 'react';
import externalStyle from './externalStyle'
import axios from 'axios';

const PATCH_API = () => {
    const [formData, setFormData] = useState({
        name: "", 
        email: "",
        gender: "",
        age: "",
        married: true
    });

    const ID = "2ffa";

    const URL = `http://10.0.2.2:3000/users/${ID}`;

    const handleFormSubmit = async () => {
        // console.log("handleFormSubmit calling...");
        console.log(formData);
        try {
            const response = await axios.patch(URL, {
                ...formData.name && {name: formData.name},
                ...formData.email && {name: formData.email},
                ...formData.gender && {name: formData.gender},
                ...formData.age && {name: formData.age},
            });
            console.log(response.data);
            Alert.alert("Success", "Data updated Successfully!!!");
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
            <Text style={{ ...externalStyle.heading, marginVertical: 15 }}>PATCH API</Text>

            <TextInput
                placeholder='Enter your name'
                value={formData.name}
                onChangeText={(val) => setFormData({...formData, name: val})}
                style={externalStyle.textInput}
            />

            <TextInput
                placeholder='Enter your email'
                value={formData.email}
                onChangeText={(val) => setFormData({...formData, email: val})}
                style={externalStyle.textInput}
            />

            <TextInput
                placeholder='Enter your gender'
                value={formData.gender}
                onChangeText={(val) => setFormData({...formData, gender: val})}
                style={externalStyle.textInput}
            />

            <TextInput
                placeholder='Enter your age'
                value={formData.age}
                onChangeText={(val) => setFormData({...formData, age: val})}
                style={externalStyle.textInput}
            />

            <TouchableOpacity onPress={handleFormSubmit}>
                <Text style={[externalStyle.customBtn, {backgroundColor: "green"}]}>Submit</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { setFormData({name: "", email: "", gender: "", age: "", married: true}) }}>
                <Text style={{...externalStyle.customBtn, backgroundColor: "red"}}>Clear Data</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PATCH_API