import { createContext, useContext, useReducer } from "react";
import { FilterReducer } from "../reducers/filter-reducer";
const sortFiltercontext = createContext();
const FilterDataProvider = ({ children }) => {

    const [state, filterDispatch] = useReducer(FilterReducer, {
        itemColor: "",
        itemCost: 0,
        itemType: ""
    });

    return (
        <sortFiltercontext.Provider value={{ state, filterDispatch }}>
            {children}
        </sortFiltercontext.Provider>
    );
};
const useFilteredData = () => useContext(sortFiltercontext);

export { useFilteredData, FilterDataProvider };
