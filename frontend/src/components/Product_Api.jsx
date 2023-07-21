export const fetchAPI = async () => {
    try {
      const response = await axios.get('https://makeup-api.herokuapp.com/api/v1/products.json');
      const shuffledData = response.data.sort(() => Math.random() - 0.5);
      return shuffledData;
    } catch (error) {
      throw new Error('Failed to fetch products');
    }
  };
   export const top_rated = async () => {
    try {
      const data = await fetchAPI();
      const sortedData = data.sort((a, b) => b.rating - a.rating);
      const selectedItems = sortedData.slice(0, 20);
      return selectedItems;
    } catch (error) {
      throw new Error('Failed to filter top rated products');
    }
  };
   export const cheap_price = async () => {
    try {
      const data = await fetchAPI();
      const sortedData = data.sort((a, b) => a.price - b.price);
      const selectedItems = sortedData.slice(0, 20);
      return selectedItems;
    } catch (error) {
      throw new Error('Failed to filter cheap price products');
    }
  };
   export const new_coming = async () => {
    try {
      const data = await fetchAPI();
      const sortedData = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      const selectedItems = sortedData.slice(0, 20);
      return selectedItems;
    } catch (error) {
      throw new Error('Failed to filter new coming products');
    }
  };