export default function reducer(state, action) {
    switch (action.type) {
      case "ADD_DATA": {
        return {
          ...state,
          videos: action.payload,
        };
      }
      case "ADD_FAVORITE": {
        return {
          ...state,
          favorites: [...state.favorites, action.payload]
        }
      }
      case "LOGIN": {
        return {
          ...state,
          user: action.payload
        }
      }
      case "LOGOUT": {
        return {
          ...state,
          user: ""
        }
      }
      case "CHANGE_PLAYER": {
        return {
          ...state,
          player: action.payload
        }
      }
      case "REMOVE_FAVORITE": {
        return {
          ...state,
          favorites: action.payload
        } 
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
  