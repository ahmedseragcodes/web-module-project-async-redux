import { FETCH_QUOTE_START, FETCH_QUOTE_SUCCESS, FETCH_QUOTE_FAILURE } from "./action";

const initialState = {
    isLoading: false,
    quote: [],
    error: "",
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case(FETCH_QUOTE_START):
            return ({
                ...state, 
                isLoading: true,
                error: "",
            });
        case(FETCH_QUOTE_SUCCESS):
            return ({
                ...state, 
                isLoading: false,
                quote: action.payload,
                error: "",
            })
        case(FETCH_QUOTE_FAILURE):
            return ({
                ...state,
                isLoading: false,
                error: action.payload,
            })
        default: 
            return state;
    }
}

export default reducer;