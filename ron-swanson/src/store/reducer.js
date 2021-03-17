import { FETCH_QUOTE_START, FETCH_QUOTE_SUCCESS, FETCH_QUOTE_FAILURE } from "./action";

const initialState = {
    isLoading: false,
    quote: [],
    error: "",
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        default: 
            return state;
    }
}

export default reducer;