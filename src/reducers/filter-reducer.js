export const FilterReducer = (state, action) => {
    switch (action.type) {
        case 'FILTER_COLOR':
            return { ...state, itemColor: [...state.itemColor, action.payload] }
        case `REMOVE_COLOR`:
            return { ...state, itemColor: state.itemColor.filter(c => c !== action.payload) }
        case 'FILTER_COST':
            return { ...state, itemCost: action.payload }
        case `REMOVE_COST`:
            return { ...state, itemCost: 0 }
        case 'FILTER_TYPE':
            return { ...state, itemType: [...state.itemType, action.payload] }
        case `REMOVE_TYPE`:
            return { ...state, itemType: state.itemType.filter(c => c !== action.payload) }
        case "CLEAR":
            return {
                itemColor: "",
                itemCost: 0,
                itemType: ""
            };
        default:
            return state;
    }
};
