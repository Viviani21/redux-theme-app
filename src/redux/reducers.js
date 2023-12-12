const initialState = {
    theme : "LIGHT",
}

const themeReducer = (state = initialState, action) =>{
    switch (action.type){
        case "TOGGLE_THEME":
            return {
                 ...state, theme: state.theme === 'LIGHT' ? 'DARK' : 'LIGHT' };
        default : 
            return state;
    }
}

export default themeReducer;