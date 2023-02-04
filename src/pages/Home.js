import { useEffect, useState } from 'react';
import CountryList from '../components/CountryList';
import { useApi } from '../hooks/ApiHook';
import { baseUrl } from '../utils/variables';

function Home() {
  const { sendRequest } = useApi();
  const [countries, setCountries] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    const fetchList = async () => {
      setIsLoading(true);
      try {
        const response = await sendRequest(`${baseUrl}/all`);

        setCountries(response);
        console.log('TEST: ', countries);
      } catch (e) {
        console.log(e.message);
      }
      setIsLoading(false);
    };
    fetchList();
  }, []);

  return (
    <>
      <h1> Country List</h1>
      {!isLoading && countries && <CountryList countries={countries} />}
    </>
  );
}

export default Home;
