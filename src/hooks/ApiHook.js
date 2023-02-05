//Custom hooks to work with http-request
export const useApi = () => {
  const sendRequest = async (
    url,
    method = 'GET',
    body = null,
    headers = {}
  ) => {
    try {
      const response = await fetch(url, {
        method,
        body,
        headers,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      return data;
    } catch (err) {
      console.log(err.message);
    }
  };
  return { sendRequest };
};
