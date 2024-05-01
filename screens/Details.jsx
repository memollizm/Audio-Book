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
           <Text style={styles.price}>5700 TL</Text>
          </View>
        </View>
      </View>

      <View style={styles.ratingRow}>

        <View style={styles.rating}>
          {[1,2,3,4,5].map((index) => ( 
            <Ionicons
            key={index}
            name='star'
            size={24}
            color="gold"
            />
          ))}

          <Text style={styles.ratingText}> {count} </Text>
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
        <View style={styles.descriptionWraper}>
          <Text style={styles.description}>Açıklama</Text>
          <Text style={styles.descText}>
          Ünlü modacı Pierre Cardin'in estetik anlayışını yansıtan lüks ve şık tasarımlara sahip halı koleksiyonlarıdır. 
          Yüksek kaliteli malzemeler ve özenli işçilikleriyle bilinirler. İnce detaylar ve modern desenler, 
          evlerde veya işyerlerinde zarif bir atmosfer oluşturmak için tasarlanmıştır. 
          </Text>
        </View>

        <View style={{marginBottom: SIZES.small}}>
          <View style={styles.location}>
            <View style={{flexDirection: "row"}}>
             <Ionicons name='location-outline' size={20}/>
             <Text>Erzincan/Merkez</Text>
            </View>
          </View>

          <View style={{flexDirection: "row"}}>
            <MaterialCommunityIcons name='truck-delivery-outline' size={20}/>
            <Text>Ücretsiz Kargo</Text>
          </View>
        </View>
        
          <View style={styles.cartRow}>
            <TouchableOpacity onPress={() => {}} style={styles.cartBtn}>
              <Text style={styles.cartTitle}>SATIN AL</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}} style={styles.addCart}>
              <Fontisto name="shopping-bag" size={22} color={COLORS.lightWhite}/>
            </TouchableOpacity>
          </View>

      </View>
    </View>
  )
}

export default Details

