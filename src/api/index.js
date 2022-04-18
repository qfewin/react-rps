/* import axios for api call and just used rapidapi for easy api testing */

import axios from "axios";

export const getDataFromApi = async (choice) => {
  try {
    /* could destructure data here instead of later but its a very small json object it returns */
    const data = await axios.get(
      `https://rock-paper-scissor2.p.rapidapi.com/api/${choice}`,
      {
        headers: {
          'X-RapidAPI-Host': 'rock-paper-scissor2.p.rapidapi.com',
          'X-RapidAPI-Key': `${process.env.REACT_APP_RAPID_API_KEY}`
        }
      }
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};