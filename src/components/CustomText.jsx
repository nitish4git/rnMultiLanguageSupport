import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const CustomText = ({ text }) => {
  return (
    <View style={styles.textStyle}>
      <Text style={styles.customText}>{text}</Text>
    </View>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  textStyle: {},
  customText: { textAlign: 'center',color:"red",textDecorationLine:"underline",fontSize:16 },
});
