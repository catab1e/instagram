import axios from "axios";
import { createContext, useReducer } from "react";



export const userContext = createContext();

const INIT_STATE = {
    users: []
}


const reducer = (state = INIT_STATE , action) => {
    switch (action.type) {
        case "GET_USERS":
            return{...state , users: action.payload};

        default:
            return state;
    }
}




const UserContextProvider = ({ children }) => {

    const [state , dispatch] = useReducer(reducer, INIT_STATE)



    const getUsers = async() => {
        let { data } = await axios("http://localhost:8008/users")
        dispatch({
            type: "GET_USERS" ,
            payload: data
        })
    }

    return (
        <userContext.Provider 
            value={{
                getUsers: getUsers,
                users: state.users
            }}
        >
            {children}
        </userContext.Provider>
    )


}


export default UserContextProvider;