import * as React from 'react';
import * as RN from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function home(){
    const navigation = useNavigation();
    return (
        <>
            <RN.Text>this is my HOME</RN.Text>
            <RN.Button title='add Screen' onPress={() =>navigation.navigate('Add')}/>
        </>
    )
}