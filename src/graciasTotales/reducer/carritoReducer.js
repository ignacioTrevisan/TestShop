export const CarritoReducer = (initialState, action) => {
    switch (action.type) {
        case '[CARRITO]AddProduct':
            const findId = [...action.carrito].findIndex((item) => item.id === action.payload.id);
            if (findId !== -1) {
                action.carrito[findId].cantidad += action.payload.cantidad;
                return action.carrito;
            } else {
                const carritoUpdate = [...action.carrito, action.payload];
                return carritoUpdate;
            }
        case '[CARRITO]deleteFromCarrito':
            const filterCarrito = [...action.carrito].filter((item) => item.id !== action.id);
            return filterCarrito;
        case '[CARRITO]deleteAllCarrito':
            return [];

        default:
            break;
    }

}