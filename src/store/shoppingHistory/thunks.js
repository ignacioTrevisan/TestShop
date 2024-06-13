import { collection, doc, setDoc } from "firebase/firestore";
import { addHistory, buySaved, startLoading, startSaving } from "./";
import { FireBaseDB } from "../../firebase/config";
import { LoadShoppingHistory } from "../../graciasTotales/helpers/loadShoppingHistory";

export const startSavingHistory = (productos) => {
    return async (dispatch, getState) => {
        dispatch(startSaving());
        const { uid } = getState().authSlice;
        const fecha = new Date().toDateString()
        const documento = { productos, fecha }
        const docRef = collection(FireBaseDB, `ventas/${uid}/historial`);
        const newDocRef = doc(docRef);
        await setDoc(newDocRef, documento);
        dispatch(buySaved());
        ;
    }
}

export const empezarACargarHistorial = () => {

    return async (dispatch, getState) => {
        console.log("cargando historial")
        dispatch(startLoading());
        const { authSlice } = getState();
        if (!authSlice.uid) throw new Error('El UID no existe');
        const history = await LoadShoppingHistory(authSlice.uid);
        const historyList = [];
        history.forEach(doc => {
            historyList.push({ ...doc.data(), id: doc.id });
        });
        dispatch(addHistory(historyList));
    }
}