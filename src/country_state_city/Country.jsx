import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Country = () => {
  const [getData, setGetData] = useState([]);

  useEffect(() => {
    const config = {
      method: 'get',
      url: 'https://api.countrystatecity.in/v1/countries',
      headers: {
        'X-CSCAPI-KEY': '',
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        // setGetData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      Hello <br />
    </div>
  );
};

export default Country;
