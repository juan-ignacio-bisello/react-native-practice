import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

interface Props {
    label: string;

    position?: 'left' | 'right';

    //methods:
    onPress?: () => void;
    onLongPress?: () => void;
}

export default function FAB({ label, onPress, onLongPress, position = 'right' }:Props ) {
  return (
      <Pressable
          style={ ({ pressed }) => [ 
            styles.floatingButton, 
            position === 'right' ? styles.positionRight : styles.positionLeft,
            pressed ? { opacity: 0.7 } : { opacity: 1 } 
        ]}
          onPress={ onPress }
          onLongPress={ onLongPress }
        >
            <Text style={{ color: 'white', fontSize: 20 }}>{ label }</Text>
        </Pressable>
  )
}

const styles = StyleSheet.create({
    
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#65558F',
    padding: 20,
    borderRadius: 15,
    elevation: 3,
    shadowRadius: 4
  },
  positionRight: {
    right: 20,
  },
  positionLeft: {
    left: 20,
  }
})