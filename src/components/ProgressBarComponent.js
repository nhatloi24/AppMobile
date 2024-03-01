/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native'
import React from 'react'

const ProgressBarComponent = ({color, percent}) => {
  return (
      <View style={{marginTop: -5}}>
          <View style={{
              height: 8,
              width: '90%',
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              marginTop: 5,
              marginBottom: 16,
              borderRadius: 50,
              alignSelf: 'center'
          }}>
            <View style={{
                backgroundColor: '#afeeee',
                width: percent,
                height: 8,
                borderRadius: 100
            }} />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around', margin: -10}}>
            <Text style={{color: '#fff'}}>Progress</Text>
            <Text style={{color: '#fff'}}>{`${percent}`}</Text>
          </View>
      </View>
  )
}

export default ProgressBarComponent