import CountryDetail from '../components/CountryDetail';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useApi } from '../hooks/ApiHook';
import { baseUrl } from '../utils/variables';
import '../App.css';

function Country() {
  const name = useParams().name;

  const { sendRequest } = useApi();
  const [country, setCountry] = useState();

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await sendRequest(`${baseUrl}/name/${name}`);

        setCountry(response);
        // console.log('COUNTRY: ', response);
      } catch (e) {
        console.log(e.message);
        alert(e.message);
      }
    };
    fetchCountry();
  }, []);

  return (
    <>
      <h1 className="App">{name}</h1>
      <CountryDetail country={country} />
    </>
  );
}

export default Country;
