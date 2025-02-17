import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, {useState} from 'react';
import ExStyles from './css/ExStyles';
import axios from 'axios';

const DELETE_API = () => {
    const [formData, setFormData] = useState({
        name: "", 
        email: "",
        gender: "",
        age: "",
        married: true
    });

    const ID = "abec";

    const URL = `http://10.0.2.2:3000/users/${ID}`;

    const handleFormSubmit = async () => {
        // console.log("handleFormSubmit calling...");
        console.log(formData);
        try {
            const response = await axios.delete(URL);
            console.log(response.data);

            Alert.alert("Success", "Data deleted Successfully!!!");
        } catch(err) {
            console.log("Error:", err);
        }
    }

    return (
        <View>
            <Text style={{ ...ExStyles.heading, marginVertical: 15 }}>DELETE API</Text>

            <TouchableOpacity onPress={handleFormSubmit} style={{margin: 10}}>
                <Text style={ExStyles.custombtn}>Delete Tasadduk</Text>
            </TouchableOpacity>
        </View>
    )
}

export default DELETE_API