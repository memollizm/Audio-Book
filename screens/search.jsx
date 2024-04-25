import { TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './search.style';
import { Feather, Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../constants';
import { useState } from 'react';


const search = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons 
            name={"camera-outline"} 
            size={SIZES.xLarge} 
            style={styles.searchIcon}/>
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchText}
            onChangeText={(text) => setSearchText(text)} 
            placeholder="Ne aramak istersiniz?"
          />
        </View>
        <View>
          <TouchableOpacity style={styles.searchBtn}>
            <Feather name="search" size={24} color={COLORS.offwhite}/>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default search
