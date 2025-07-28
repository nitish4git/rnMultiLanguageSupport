import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Ionicons from '@react-native-vector-icons/ionicons';
import Modal from 'react-native-modal';
import { languages } from './constants/Data';
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';
const SelectLanguage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedLang, setSelectedLang] = useState('en');
  const handleSelectedLang = item => {
    i18n.changeLanguage(item.id);
    setSelectedLang(item.id);
  };
  const { t } = useTranslation();
  return (
    <View>
      <TouchableOpacity
        style={styles.iconContainer}
        activeOpacity={0.7}
        onPress={() => setIsVisible(true)}
      >
        <Text style={styles.textStyle}>{t('selectLanguage')}</Text>
        <Ionicons name="language" size={20} color="black" />
      </TouchableOpacity>
      <View>
        <Modal
          isVisible={isVisible}
          backdropColor="transparent"
          onBackdropPress={() => setIsVisible(false)}
          style={styles.modalStyle}
        >
          <View style={styles.container}>
            <View>
              {languages.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={item.id}
                    style={styles.contentConatainer}
                    onPress={() => handleSelectedLang(item)}
                    activeOpacity={0.9}
                  >
                    <Text style={styles.langText}>{item.label}</Text>
                    {
                      <Ionicons
                        name={
                          selectedLang === item.id
                            ? 'checkmark-circle'
                            : 'remove-circle-outline'
                        }
                        size={22}
                      />
                    }
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </Modal>
        {/*  */}
      </View>
    </View>
  );
};

export default SelectLanguage;

const styles = StyleSheet.create({
  iconContainer: {
    alignSelf: 'flex-end',
    borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    padding: 8,
    borderRadius: 5,
    backgroundColor: 'aliceblue',
    elevation: 15,
    shadowColor: 'blue',
  },
  textStyle: {
    fontSize: 14,
    fontWeight: 400,
    color: 'black',
  },
  modalStyle: {
    margin: 0,
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  container: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 20,
    shadowColor: 'blue',
    paddingTop: 20,
  },
  contentConatainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    margin: 3,
  },
  langText: {
    fontSize: 16,
    fontWeight: 500,
    color:"black"
  },
  checkBox: { height: 20, width: 20, borderRadius: 50, borderWidth: 1 },
});
