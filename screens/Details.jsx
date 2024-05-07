import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React, {useState}  from 'react';
import { Fontisto, Ionicons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import styles from './productDetails.style';
import { COLORS, SIZES } from '../constants';

const Details = ({navigation}) => {
  const [count, setCount] = useState(1)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    if(count > 1){
      setCount(count - 1)
    }
  }

  
  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
         <Ionicons name='chevron-back-circle' size={30}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
         <Ionicons name='heart' size={30} color={COLORS.primary}/>
        </TouchableOpacity>

      </View>

      <Image 
        source={{uri: "https://halikoy.com/wp-content/uploads/2016/06/kirman-memluk-hali-modelleri.jpg"}}
        style={styles.image}
      />

      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Pierre Cardin 160x230</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>12000 TL</Text>
          </View>
        </View>

        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1,2,3,4,5].map((index) =>(
              <Ionicons 
                key={index}
                name='star'
                size={24}
                color="gold"/>
            ))}
            <Text style={styles.ratingText}>(4.9)</Text>
          </View>

          <View style={styles.rating}>
            <TouchableOpacity onPress={() => increment()}>
              <SimpleLineIcons
              name='plus' size={20}
              />
            </TouchableOpacity>
            <Text style={styles.ratingText}> {count} </Text>

            <TouchableOpacity onPress={() => decrement()}>
              <SimpleLineIcons
              name='minus' size={20}
              />
            </TouchableOpacity>
          </View>
          
        </View>

        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}></Text>

        </View>

      </View>

    </View>
  )
}

export default Details

