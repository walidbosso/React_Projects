const BASE_URL = "http://localhost:3001";

export const fetcher = async (url) => { //async w await daroriyen bash html mayhozchi responeObject w howa baqe khawi
  let responseObject = { errorMessage: '', data: [] }; //ida kan json server mshdod

  try {
    const response = await fetch(BASE_URL + url); // http://localhost:3001 + /CATEGORIES ETC kanstakhdmo FETSH kanhozzo donnes m dak page
    if (!response.ok) {
      throw new Error(`HTTP Error ${response.status}`); 
    }//hadi ida khtina f URL
    const responseData = await response.json(); //NHAWLOH L JSON w stenna qbel ad stockihom f var
    responseObject.errorMessage = '';
    responseObject.data = responseData;

    return responseObject;
  }
  catch (err) {
    responseObject.errorMessage = err.message;
    return responseObject;
  }

}

export const getCategories = () => {
  return fetcher('/categories');
}

export const getProducts = id => {
  return fetcher('/products?catId=' + id);
}

export const getProductById = id => {
  return fetcher('/products/' + id);
}

export const getProductsByQuery = query => {
  return fetcher('/products?q=' + query);
}