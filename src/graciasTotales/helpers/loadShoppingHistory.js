import { collection, getDocs } from "firebase/firestore";
import { FireBaseDB } from "../../firebase/config";

export const LoadShoppingHistory = async (uid = '') => {
    const collectionRef = collection(FireBaseDB, `ventas/${uid}/historial`);
    const docs = await getDocs(collectionRef);

    return docs;
}