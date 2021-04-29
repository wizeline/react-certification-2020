const reducer = (state={}, action) => {
  
  switch (action.type) {
    case "TOGGLE_DARK_MODE":
      console.log("Ana inside of reducer " );
      return {
         isDark: !state.isDark 
        };
  default:
        return state;
  }
};
export default reducer;