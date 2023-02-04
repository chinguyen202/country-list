import { useEffect, useState } from 'react';
import CountryList from '../components/CountryList';
import { useApi } from '../hooks/ApiHook';
import { baseUrl } from '../utils/variables';
import '../App.css';

function Home() {
  const { sendRequest } = useApi();
  const [countries, setCountries] = useState();

  useEffect(() => {
    const fetchList = async () => {
      try {
        const response = await sendRequest(`${baseUrl}/all`);

        setCountries(response);
      } catch (e) {
        console.log(e.message);
        alert(e.message);
      }
    };
    fetchList();
  }, []);

  return (
    <>
      <h1 className="App"> Country List</h1>
      {countries && <CountryList countries={countries} />}
      {!countries && <h1 className="App">Please try again later</h1>}
    </>
  );
}

export default Home;
