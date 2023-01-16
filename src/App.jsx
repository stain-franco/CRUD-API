import "./App.css";
import { useState, useEffect } from "react";
import ProductsForm from "./components/ProductsForm";
import ProductsList from "./components/ProductsList";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [productDataUpdate, setProductDataUpdate] = useState(null);

  useEffect(() => {
    axios
      .get("https://products-crud.academlo.tech/products/")
      .then((resp) => setProducts(resp.data))
      .catch((error) => console.error(error));
  }, []);

  const getAPIData = () => {
    axios
      .get("https://products-crud.academlo.tech/products/")
      .then((resp) => setProducts(resp.data))
      .catch((error) => console.error(error));
  };

  const addProduct = (data) => {
    axios
      .post("https://products-crud.academlo.tech/products/", data)
      .then(() => getAPIData())
      .catch((error) => console.error(error));
  };

  const deleteProduct = (productId) => {
    axios
      .delete(`https://products-crud.academlo.tech/products/${productId}/`)
      .then(() => getAPIData())
      .catch((error) => console.error(error));
  };

  const selectProduct = (productData) => {
    setProductDataUpdate(productData);
  };

  const updateProduct = (editedProduct) => {
    axios
    .put(`https://products-crud.academlo.tech/products/${editedProduct.id}/`,editedProduct)
    .then(() => getAPIData)
    .catch(error => console.error(error))
    setProductDataUpdate(null);
  };

  return (
    <div className="App">
      <ProductsForm
        createProductData={(data) => addProduct(data)}
        productSelectedData={productDataUpdate}
        updateProduct={updateProduct}
      />
      <ProductsList
        products={products}
        deleteProduct={deleteProduct}
        selectProduct={selectProduct}
      />
    </div>
  );
}

export default App;
