import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomBtn = ({message}) => {
  return (
    <View>
      <TouchableOpacity style={styles.btn} activeOpacity={0.7}>
        <Text style={styles.btnText}>{message}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default CustomBtn

const styles = StyleSheet.create({
    btn:{
        backgroundColor:"blue",padding:17,borderRadius:50
    },btnText:{
        textAlign:"center",color:"aliceblue",fontSize:16,fontWeight:"bold"
    }
})