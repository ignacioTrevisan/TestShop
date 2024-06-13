import { OnGetAllProducts } from "../../graciasTotales/helpers/getProducts";
import { add } from "./productosSlice";

export const getProducts = () => {
    return async (dispatch, getState) => {
        const { authSlice } = getState();
        if (!authSlice.uid) throw new Error('El UID no existe');
        const productos = await OnGetAllProducts(authSlice.uid);
        dispatch(add(productos));
    }
}