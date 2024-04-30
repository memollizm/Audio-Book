import { TouchableOpacity, Text, View, Image } from 'react-native'
import React from 'react'
import styles from './productCardView.style';
import {Ionicons} from "@expo/vector-icons"
import { COLORS } from '../../constants';
import { useNavigation } from "@react-navigation/native";

const ProductCardView = () => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Details")}>
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                   source={{uri: "https://halikoy.com/wp-content/uploads/2016/06/kirman-memluk-hali-modelleri.jpg"}}
                    style={styles.image}
                />
            </View>
            <View style={styles.details}>
                <Text style={styles.title} numberOfLines={1}>
                    Pierre Cardin
                </Text>
                <Text style={styles.supplier} numberOfLines={1}>
                    160x230
                </Text>
                <Text style={styles.price}>
                    5.700 TL
                </Text>
            </View>
            <TouchableOpacity style={styles.addBtn}>
                <Ionicons name="add-circle" size={35} color={COLORS.primary}/>
            </TouchableOpacity>
        </View>
    </TouchableOpacity>
  )
}

export default ProductCardView

