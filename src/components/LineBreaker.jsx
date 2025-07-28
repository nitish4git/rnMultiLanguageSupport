import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LineBreaker = ({message}) => {
  return (
    <View style={{flexDirection:"row",justifyContent:"space-evenly",alignItems:"center",}}>
      <View style={styles.breaker}/>
      <Text style={styles.text}>{message}</Text>
      <View style={styles.breaker}/>
    </View>
  )
}

export default LineBreaker

const styles = StyleSheet.create({
    breaker:{
        height:1,width:140,backgroundColor:"gray",marginVertical:15
    },text:{
        fontSize:16,fontWeight:"bold",color:"black"
    }
})