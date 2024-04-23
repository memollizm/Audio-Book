import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './heading.style'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../../constants'

const Headings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Yeni Ürünler</Text>
        <TouchableOpacity>
         <Ionicons name='ios-grid' size={24} color={COLORS.primary}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}



export default Headings

