import React, { useState, useEffect } from 'react';

const useFetch = () => {
	const [url, setUrl] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

	useEffect(() => {
		
    const fetchData = async () => {
			try {
				setLoading(true);
				const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP Error ${response.status}`);
				}
				const responseData = await response.json();
        setData(responseData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

		if (url !== null) fetchData();
  }, [url]);
  return {
    data,
    loading,
		error,
    setUrl
  };
};

export const useCategories = () => {
  const { data: categories, loading, error, setUrl: getCategories } = useFetch();

  debugger;
  useEffect(() => {
    debugger;
    getCategories('http://localhost:3001/categories');
  }, []);

  return {
    categories,
    loading,
		error,
  }
}

export const useProducts = (id) => {
  const { data: products, loading, error, setUrl: getProducts } = useFetch();
  getProducts('http://localhost:3001/products?catId=' + id);

  return {
    products,
    loading,
		error,
  }
}


