/* eslint-disable prettier/prettier */
import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Fonts } from '../contants'

const AvatarGroup = () => {
    const uidsLength = 10
    const imageURL = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/lbUJ6vv7dmvGiMH7HRrCarQiUY9.jpg'

    return (
        <View>
            <View style={styles.renderImage}>
                {Array.from({ length: uidsLength }).map(
                    (item, index) => index < 4 && (
                        <Image
                            key={item}
                            source={{ uri: imageURL }}
                            style={styles.imageStyle} />
                    ))}
                {
                    uidsLength > 5 && (
                        <View style={styles.numberSyle}>
                            <Text style={{
                                lineHeight: 18,
                                fontFamily: Fonts.POPPINS_BOLD
                            }}>{`${uidsLength - 4}+`}</Text>
                        </View>
                    )}
            </View>
        </View>
    )
}

export default AvatarGroup;

const styles = StyleSheet.create({
    imageStyle: {
        width: 32,
        height: 32,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#fff',
        marginLeft: -10,
     },
     renderImage: {
        marginVertical: 10, 
        justifyContent: 'flex-start', 
        flexDirection: 'row', 
        marginHorizontal: 15
     },
    numberSyle: {
        backgroundColor: '#fff',
        borderRadius: 100,
        width: 32,
        height: 32,
        borderWidth: 1,
        borderColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: -10
    }
})