import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemsPage = () => {
  const [termekek, setTermekek] = useState([]);

  useEffect(() => {
    const fetchTermekek = async () => {
      const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      };

      try {
        const response = await axios.get('https://jwt.sulla.hu/termekek', config);
        setTermekek(response.data);
      } catch (error) {
        console.error("Hiba történt a termékek lekérésekor", error);
      }
    };

    fetchTermekek();
  }, []);

  return (
    <div className="container mt-3">
      <h2>Termékek</h2>
      <div className="row">
        {termekek.map((termek) => (
          <div className="col-md-4" key={termek.id}>
            <div className="card mb-4 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{termek.name}</h5>
                <p className="card-text">{termek.price} Ft</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemsPage;
