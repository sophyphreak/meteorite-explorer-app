import axios from 'axios';

const getMeteoriteData = async () => {
  try {
    const data = await axios.get(
      'https://data.nasa.gov/resource/gh4g-9sfh.json'
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default getMeteoriteData;
