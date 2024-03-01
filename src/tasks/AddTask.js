/* eslint-disable prettier/prettier */
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../contants'
import AntDesign from 'react-native-vector-icons/AntDesign';
import InputComponent from '../components/InputComponent';

const initialValue = {
  title: '',
  description: '', 
  dueDate: '',
  start: '',
  end: '',
  uids: [],
  fileUrls: [],
}

const AddTask = ({navigation}) => {
  const [taskDetail, setTaskdetail] = useState(initialValue);

  const handleChangeValue = (id, value) => {
    const item = {...taskDetail}

    item[`${id}`] = value;

    setTaskdetail(item);
  }
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.replace('HomeScreen')}  >
            <AntDesign name='caretleft' size={20} color={'#fff'} />
          </TouchableOpacity>
          <View>
            <Text style={styles.text}>Add new Task</Text>
          </View>
          <TouchableOpacity style={styles.iconButton}>
            <AntDesign name='edit' size={20} color={'#fff'} />
          </TouchableOpacity>
        </View>

        <View>
          <InputComponent
          prefix = {<AntDesign name='user' size={20} color={'#fff'}/>}
          value={taskDetail.title}
          onChange={val => handleChangeValue('title', val)}
          title= 'Title'
          allowClear
          placeholder= "Title of task"
          />
        </View>
      </ScrollView>
    </View>
  )}

export default AddTask

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
    fontFamily: 'bold'
  }
})