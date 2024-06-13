export const productsReducer = (initialState = [], action) => {
    switch (action.type) {



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