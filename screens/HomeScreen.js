import { View, Text, Button } from 'react-native'
import React from 'react'

import { Ionicons } from '@expo/vector-icons'

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex:'1', alignItems:'center', justifyContent:'center'}}>
      <Ionicons name='home' size={30} color='#00b8b8' />
      <Text>Home Screen</Text>
      <Button
        title='About US'
        onPress={() => navigation.navigate('About', {
            email:'Reactnative@tni.ac.th'
        })}
      />
    </View>
  )
}

export default HomeScreen