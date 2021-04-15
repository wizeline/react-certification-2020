export default function reducer(state, action) {
    switch (action.type) {
      case "ADD_DATA": {
        return {
          ...state,
          videos: action.payload,
        };
      }
      case "DARK_MODE":{
        return {
          ...state,
          darkMode: action.payload
        };
      }
      case "SEARCH": {
        return {
          ...state,
          search: action.payload
        }
      }
      default:
        throw new Error("Unkown action");
    }
  }
  