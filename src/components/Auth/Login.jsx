import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import SelectLanguage from '../../SelectLanguage';
import LottieView from 'lottie-react-native';
import loginAnimation from '../../../assets/Animation/AnimatedIcon/loginAnimation.json';
import LineBreaker from '../LineBreaker';
import InputBox from '../InputBox';
import CustomBtn from '../CustomBtn';
import { useTranslation } from 'react-i18next';
const Login = () => {
  const {t} = useTranslation()
  return (
    <View style={styles.container}>
      <View>
        <SelectLanguage />
      </View>
      <View style={styles.animationContainer}>
        <LottieView source={loginAnimation} autoPlay style={styles.animation} />
      </View>
      <LineBreaker message={t("logIn")} />
      <View>
        <InputBox placeholderText={t("username")} />
        <InputBox placeholderText={t("password")} />
        <TouchableOpacity>
          <Text style={styles.textF}>{t("forgotPassword")+"?"}</Text>
        </TouchableOpacity>
      </View>
      <CustomBtn message={t("continue")} />
      <View style={{ marginTop: 10 }}>
        <LineBreaker message={t("newUser")} />
      </View>
      <View style={{ marginTop: 20 }}>
        <CustomBtn message={t("createNewAccount")} />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  animation: {
    height: 200,
    width: 200,
  },
  animationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  textF: {
    color: 'blue',
    textDecorationLine: 'underline',
    paddingVertical: 10,
    alignSelf: 'flex-end',
    paddingHorizontal: 15,
  },
});
