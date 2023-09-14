// Example API call to the backend server
const fetchDataFromServer = async () => {
    try {
      const response = await fetch('http://localhost:3000');
      if (!response.ok) {
        throw new Error('Request failed');
      }
      const data = await response.json();
      console.log(data); // Process the data received from the server
    } catch (error) {
      console.error(error);
    }
  };
  
  // Call the function to fetch data from the server
  fetchDataFromServer();
  