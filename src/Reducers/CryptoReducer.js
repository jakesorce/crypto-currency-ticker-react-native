const initialState = {
  isFetching: false,
  data: [],
  hasError: false,
  errorMessage: null,
}

const CryptoReducer = (state = initialState, action) => {
  switch(action.type) {
    case "FETCHING_COIN_DATA":
      return { ...state, isFetching: true }
    case "FETCHING_COIN_DATA_SUCCESS":
      return { ...state, data: action.payload, isFetching: false }
    case "FETCHING_COIN_DATA_FAIL":
      return { ...state, isFetching: false, hasError: true, errorMessage: action.payload }
    default:
      return state
  }
}

export default CryptoReducer
