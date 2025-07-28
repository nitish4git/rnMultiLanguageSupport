import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const InputBox = ({placeholderText}) => {
  return (
    <View>
        <View style={styles.container}>
            <TextInput placeholder={placeholderText} placeholderTextColor="gray" style={styles.textStyle}/>
        </View>
    </View>
  )
}

export default InputBox

const styles = StyleSheet.create({
    container:{
borderWidth:1,borderColor:"black",borderRadius:7,padding:5,elevation:10,backgroundColor:"aliceblue",marginVertical:10
    },textStyle:{
        fontSize:18,paddingLeft:10,color:"black"
    }
})