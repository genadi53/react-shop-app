import ShopActionTypes from './shop.types';

const initialState = {
    collections: null,
    isFetching: true,
    errorMessage: undefined,

}

const shopReducer = (state = initialState, action) => {
    switch(action.type){
        case ShopActionTypes.UPDATE_COLLECTIONS: 
            return {
                ...state,
                collections: action.payload
            }

        case ShopActionTypes.FETCH_COLLECTIONS_START: 
        return {
            ...state,
            isFetching: true,
            collections: action.payload
        }
        
        case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS: 
        return {
            ...state,
            isFetching: false,
            collections: action.payload
        }

        case ShopActionTypes.FETCH_COLLECTIONS_FAILURE: 
        return {
            ...state,
            isFetching: false,
            collections: action.payload
        }

        default: return state;
    }
}

export default shopReducer;