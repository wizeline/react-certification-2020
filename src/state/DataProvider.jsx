import { createContext, useContext, useReducer, useState } from "react";
import reducer from "./DataReducer";

const DataContext = createContext({
    videos: [],
    darkMode: false,
    search: "",
    favorites: [],
    player: "",
    user: ""
})

function useData() {
    const context = useContext(DataContext)
    if (!context) {
        throw new Error(`Can't use "useData" without a DataProvider`)
    }
    return context
}

function DataProvider({ children }) {
    const [data, dispatch] = useReducer(reducer,{videos: [], darkMode: false, search: "", favorites: [], player: "", user: ""})
    return (
        <DataContext.Provider value={{data, dispatch}}>
            { children }
        </DataContext.Provider>
    )
}

export { useData }
export default DataProvider