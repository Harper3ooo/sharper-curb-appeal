import { useEffect, useState } from 'react';

function PrintfulStore() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/printful-products')
      .then(res => res.json())
      .then(data => {
        if (data.result) setProducts(data.result);
      });
  }, []);

  return (
    <div className="printful-store">
      {products.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <img src={item.thumbnail_url} alt={item.name} />
        </div>
      ))}
    </div>
  );
}

export default PrintfulStore;