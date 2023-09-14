import React, { createContext, useReducer, useEffect } from "react";

export const themes = {
    light: {
        background: "white",
        color: "black",
        padding: "10vh"
    },
    dark: {
        background: "black",
        color: "white",
        padding: "10vh"
    }
};

const initialState = {
    theme: themes.dark, 
    data: [], 
    fav: []
}
const agregarFavorito =() =>{
console.log(initialState.fav);
}

const themeReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_THEME":
            return {
                ...state,
                theme: state.theme === themes.light ? themes.dark : themes.light,
            };
        case "SET_DATA":
            return {
                ...state,
                data: action.payload,
            };
            case "ADD_FAVORITE":
            return{...state, fav : action.payload,
                agregarFavorito
            }
        default:
            return state;
    }
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(themeReducer, initialState);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => {
                dispatch({ type: "SET_DATA", payload: data })
            })
            .catch((error) => {
                console.error("Error al obtener los dentistas ", error);
            });
    }, []);

    return (
        <ThemeContext.Provider value={{ state, dispatch }}>
            {children}
        </ThemeContext.Provider>
    );
};