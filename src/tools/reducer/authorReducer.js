const initialState = {
    authors: [],
    books: []
  };
  
  const authorReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_AUTHOR":
        return {
          ...state,
          authors: action.authors
        };
      case "GET_BOOKS":
        return {
          ...state,
          books: action.books
        };
      default:
        return state;
    }
  };
  
  export default authorReducer;
  