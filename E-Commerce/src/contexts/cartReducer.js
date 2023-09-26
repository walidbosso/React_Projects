const Storage = (cartItems) => {
    sessionStorage.setItem('cart', JSON.stringify(cartItems.length > 0 ? cartItems: [])); //cartItemps or empty array
}// session kibghi key, w valeurs en string, kan emlo JSON.stringify bash kan serializiw JSON Object wiyrja3 sting

export const CartReducer = (state, action) => {

  let index = -1;
  if (action.payload)
    index = state.cartItems.findIndex(x => x.id === action.payload.id);
  
  let newItems = [...state.cartItems];

  switch (action.type) {
    case "ADD":
    case "INCQTY"://or
      if (index === -1) {
        //state.cartItems.push({ ...action.payload, quantity: 1 }); // BAD WAY
        newItems.push({ ...action.payload, quantity: 1 }); // GOOD WAY https://dev.to/andyrewlee/cheat-sheet-for-updating-objects-and-arrays-in-react-state-48np
      }
      else {
        newItems[index].quantity++;
        //state.cartItems[index].quantity++;
      }
      break;
  
    case "REMOVE":
      if (index > -1) {
        //state.cartItems.splice(index, 1); // BAD WAY khass l copy, mateamlchi mea array direct, eml let newItems = [...state.cartItems];, splice kibsl array, filter ki returner array jdida
        newItems = state.cartItems.filter(x => x.id !== action.payload.id); // GOOD WAY dabaead ida clickiti ela button d INC DEC etc, dabaead ghay trefresha, b tariqa d array direct makanchi ki bghi had shi elash
      }
      break;
       
    case "DECQTY":
      if (index > -1) {
        if (newItems[index].quantity > 1)
          newItems[index].quantity--;
        //state.cartItems[index].quantity--;
      }
      break;
    
    case "CLEAR":
      newItems = [];
      break;
      
    default:
  }

  state.cartItems = newItems;
  Storage(newItems);//stock f session

  return state;

}