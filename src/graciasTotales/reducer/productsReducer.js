export const productsReducer = (initialState = [], action) => {
    switch (action.type) {
        case '[PRODUCTS]cargaInicial':
            return action.payload;
        case '[PRODUCTS]orderByPrice':
            const orderList = [...action.payload].sort((a, b) => a.precioDeOferta - b.precioDeOferta)
            return orderList;
        case '[PRODUCTS]FilterByOffers':
            const filterList = [...action.payload].filter(item => item.oferta === true)
            return filterList;
        case '[PRODUCTS]filterByClothing':
            const listFilter = [...action.payload].filter(item => item.categoria === action.clothingType);
            return listFilter;
        case '[PRODUCTS]filterByClothingAndWithOffers':
            const listFilterWithOffers = [...action.payload].filter(item => item.categoria === action.clothingType && item.oferta === true);
            return listFilterWithOffers;
        case '[PRODUCTS]filterById':
            const productById = [...action.payload].filter(item => item.id === parseInt(action.id))
            return productById;

    }
    return initialState;
}