import { useEffect, useState } from 'react';
import CountryList from '../components/CountryList';

function Home() {
  const [countries, setCountries] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    const sendRequest = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        console.log('DATA: ', data);

        if (!response.ok) {
          throw new Error(data.message);
        }

        setCountries(data);
      } catch (e) {
        console.log(e.message);
      }
      setIsLoading(false);
    };
    sendRequest();
  }, []);

  return (
    <>
      <h1> Country List</h1>
      {!isLoading && countries && <CountryList countries={countries} />}
    </>
  );
}

export default Home;
