import data from '/Curso/pruebaTiendaDos/src/data/data.json'
import { FireBaseDB } from '../../firebase/config';
import { getDocs, collection } from 'firebase/firestore';
export const GetAllProducts = () => {
    return new Promise((resolve, reject) => {
        resolve(data);
    })
}

export const OnGetAllProducts = async () => {
    const collectionRef = collection(FireBaseDB, 'products');
    const docs = await getDocs(collectionRef);
    const products = [];

    docs.forEach(doc => {
        products.push(doc.data());
    })
    return products;
}