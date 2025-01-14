import React, { useState } from 'react'
import { View, Text, Modal, TouchableOpacity, Button } from 'react-native'
import externalStyle from './externalStyle'

function MyModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <View>
            <Modal
                animationType='slide'
                transparent={true}
                visible={showModal}
            >
                <View style={externalStyle.modalWrapper}>
                    <View style={externalStyle.modalView}>
                        <Text style={externalStyle.modalText}>Hello Shahbaz</Text>

                        <TouchableOpacity
                            onPress={() => setShowModal(false)}
                        >
                            <Text style={{ ...externalStyle.customBtn, backgroundColor: "#ed0524", padding: 10, margin: 5, fontSize: 18, fontWeight: 700 }}>Close Modal</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <TouchableOpacity
                onPress={() => setShowModal(true)}
            >
                <Text style={{ ...externalStyle.customBtn, backgroundColor: "#290cab" }}>Show Modal</Text>
            </TouchableOpacity>
        </View>
    )
}

export default MyModal