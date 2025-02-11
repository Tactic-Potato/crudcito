import * as React from 'react';
import * as RN from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {database} from '../../config/fb';
import { collection, onSnapshot, orderBy, query, QuerySnapshot } from 'firebase/firestore';
import Product from '../components/products';
export default function home(){
    const navigation = useNavigation();
    const [products, setProducts] = React.useState([]);

    React.useEffect(()=>{
        const collectionRef = collection(database, 'products');
        const q = query(collectionRef, orderBy('created', 'desc'));

        const unsuscribe = onSnapshot(q, querySnapshot => {
            setProducts(
                querySnapshot.docs.map(doc => ({   
                    id: doc.id,
                    emoji: doc.data().emoji,
                    name: doc.data().name,
                    price: doc.data().price,
                    isSold: doc.data().isSold,
                    creaateAt: doc.data().createAt,
                })
                )
            )})
        return unsuscribe;

    }, [])
    return (
        <>
            <RN.Text>Products</RN.Text>
            {products.map(product => <Product key={product.id} {...product}/>)}
            <RN.Button title='add Screen' onPress={() =>navigation.navigate('Add')}/>
        </>
    )
}