import axios from "axios"
import { API } from "../constants/index";

export const FETCH_QUOTE_START="FETCH_QUOTE_START";
export const FETCH_QUOTE_SUCCESS="FETCH_QUOTE_SUCCESS";
export const FETCH_QUOTE_FAILURE="FETCH_QUOTE_FAILURE";


export const fetchData = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_QUOTE_START })
        axios.get(`${API}`)
        .then((res)=>{
            console.log("SUCCESSFULLY FETCHED QUOTE FROM API", res);
            dispatch({ type: FETCH_QUOTE_SUCCESS, payload: res.data })
        })        
        .catch((err)=>{
            console.log("FAILED TO FETCH QUOTE FROM API", err);
            dispatch({ type: FETCH_QUOTE_FAILURE, payload: err.message })
        })
    }
}