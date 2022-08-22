import React, { useEffect, useState } from "react";
import "./products.css";
import { Link } from "react-router-dom";
const Products = () => {
  const [data, setdata] = useState([]);
  const [filter, setfilter] = useState(data);
  const [first, setfirst] = useState('')

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await fetch('http://localhost:3000/ropa');
    setdata(await response.clone().json());
    setfilter(await response.json());
  };

  const filterProduct = (cat) => {
    const updateList = data.filter((e) => e.category === cat);
    setfilter(updateList);
    setfirst(cat)
  };

  const all = () => {
    setfilter(data)
    setfirst('All')
  }

  console.log(filter);
  
  

  return (
    <div id="products">
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={all}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Men
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Women
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("jewelery")}
          >
            jewelery
          </button>
        </div>
        <h3>{first}</h3>
<div className="grid">
  
        {filter.map((product) => {
          return (
            <div className=" " key={product.id}>
              <div className="card h-100 text center">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                  height="250px"
                />
                <div className="card-body">
                  <h5 className="card-title mb-0">
                    {product.title.substring(0, 12)}
                  </h5>
                  <p className="card-text">${product.price}</p>
                </div>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
};

export default Products;
