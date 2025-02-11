import * as React from 'react';
import * as RN from 'react-native';
import {database} from '../../config/fb';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import {AntDesign} from '@expo/vector-icons';

export default function Product({
    id,
    emoji,
    name,
    price,
    isSold
}){
    return(
        <RN.View style = {StyleSheet.productContainer}> 
            <RN.Text style = {styles.emoji}>{emoji}</RN.Text>
            <RN.Text style = {styles.name}>{name}</RN.Text>
            <RN.Text style = {styles.price}>{price}</RN.Text>
        </RN.View>
    )
}

