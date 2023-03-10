import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Category = ({category}) => {
  return (
    <View style={styles.container}>
            <ImageBackground source={category.icon} style={styles.image}>
                <Text style={styles.title}>{category.title}</Text>
            </ImageBackground>
    </View>
  )
}

export default Category

const styles = StyleSheet.create({
    container:{

    },
    image:{
        width:143,
        height:143,
        justifyContent:"center",
        alignItems:"center"
    },
    title:{
        fontSize:23,
        color:"#fff",
        fontWeight:"bold"
    }
})