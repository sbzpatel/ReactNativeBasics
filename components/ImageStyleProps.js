import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import externalStyle from './externalStyle';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


function ImageStyleProps() {
    const asset = { uri: "https://reactnative.dev/img/tiny_logo.png" };

    return (
        <View>
            <View style={[externalStyle.container, { backgroundColor: "#3f4663" }]}>
                <Text style={{ ...externalStyle.heading, color: "#fff" }}>Image Resize Modes</Text>
            </View>
            <Image
                style={[styles.image, { resizeMode: scale("cover") }]}
                source={asset}
            />
            <Text style={styles.text}>resizeMode: cover</Text>

            <Image
                source={asset}
                style={[styles.image, { resizeMode: "center" }]}
            />
            <Text style={styles.text}>resizeMode: center</Text>

            <Image
                source={asset}
                style={[styles.image, { resizeMode: "contain" }]}
            />
            <Text style={styles.text}>resizeMode: contain</Text>

            <Image
                source={asset}
                style={[styles.image, { resizeMode: "repeat" }]}
            />
            <Text style={styles.text}>resizeMode: repeat</Text>

            <Image
                source={asset}
                style={[styles.image, { resizeMode: "stretch" }]}
            />
            <Text style={styles.text}>resizeMode: strech</Text>


            <View style={[externalStyle.container, { backgroundColor: "#3f4663" }]}>
                <Text style={{ ...externalStyle.heading, color: "#fff" }}>Image Border Radius</Text>
            </View>
            <Image
                style={[styles.image, { borderTopLeftRadius: 15 }]}
                source={asset}
            />
            <Text style={styles.text}>borderTopLeftRadius</Text>

            <Image
                style={[styles.image, { borderTopRightRadius: 15 }]}
                source={asset}
            />
            <Text style={styles.text}>borderTopRightRadius</Text>

            <Image
                style={[styles.image, { borderBottomLeftRadius: 15 }]}
                source={asset}
            />
            <Text style={styles.text}>borderBottomLeftRadius</Text>

            <Image
                style={[styles.image, { borderBottomRightRadius: 15 }]}
                source={asset}
            />
            <Text style={styles.text}>borderBottomRightRadius</Text>

            <Image
                style={[styles.image, { borderRadius: 15 }]}
                source={asset}
            />
            <Text style={styles.text}>borderRadius</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        borderWidth: 1,
        borderColor: 'red',
        height: verticalScale(150),
        width: scale("100%"),
        margin: scale(15)
    },
    text: {
        textAlign: 'center',
        marginBottom: scale(15),
        fontSize: scale(24)
    },
})

export default ImageStyleProps