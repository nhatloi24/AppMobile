/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { Colors } from '../contants'

const InputComponent = (props) => {
    const {value, onChange, placeholder, title, prefix, affix, allowClear} = props
  return (
      <View style={{ marginBottom: 16 }}>
          {title && <View style={styles.titleContainer} >
              <Text style={styles.text}>Title</Text>
          </View>}
          <View>
              <View style={styles.inputText}>
                  {prefix && prefix}
                  <View style={{
                    }}>
                      <TextInput
                          style={{ margin: 5, padding: 0, flex: 1, }}
                          placeholder={placeholder ?? ''}
                          placeholderTextColor={'#676767'}
                          value={value}
                          onChangeText={val => onChange(val)}
                      />
                  </View>
                  {affix && affix}
              </View>
          </View>
      </View>
  )
}

export default InputComponent

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.DEFAULT_BLACK2,
      padding: 20,
      paddingTop: 32
    },
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    iconButton: {
      height: 40,
      width: 40,
      borderRadius: 15,
      borderWidth: 1,
      backgroundColor: Colors.DEFAULT_GREY,
      justifyContent: 'center',
      alignItems: 'center'
    },
    text: {
      fontSize: 16,
      color: Colors.DEFAULT_WHITE,
      fontFamily: 'bold',
      marginLeft: 5
    },
    titleContainer: {
        marginTop: 16
    },
    inputText: {
        flex: 1,
        height: 50,
        width: '100%',
        borderWidth: 0.5,
        borderRadius: 20,
        backgroundColor: Colors.GRAY,
        marginTop: 16,
        flexDirection: 'row',
    }
  })