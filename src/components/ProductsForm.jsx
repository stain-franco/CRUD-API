import { useForm } from "react-hook-form";
import { useEffect } from "react";

const ProductsForm = ({createProductData,productSelectedData,updateProduct }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const getFormData = (data) => {
    console.log(data);
    if (productSelectedData) {
      updateProduct(data);
    } else {
      createProductData(data);
      resetForm();
    }
  };

  useEffect(() => {
    if (productSelectedData !== null) {
      reset(productSelectedData);
    } else {
      resetForm();
    }
  }, [productSelectedData]);

  const resetForm = () => {
    reset({
      name: "",
      category: "",
      price: "",
    isAvailable: ""
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(getFormData)}>
        <div className="input-wrapper">
          <label htmlFor="product-name">Nombre del producto</label>
          <input
            type="text"
            id="product-name"
            className="product-name"
            placeholder=""
            {...register("name", {
              required: true
            })}
          />
          {errors.name?.type === "required" && (
            <span role="alert">Este input es requerido</span>
          )}
        </div>
        <div className="input-wrapper">
          <label htmlFor="product-category">Categoria</label>
          <input 
            type="text"
            id="product-category"
            className="product-name"
            placeholder=""  
            {...register("category", {
              required: true
            })}
          />
          {errors.name?.type === "required" && (
            <span role="alert">Este input es requerido</span>
          )}
        </div>
        <div className="input-wrapper">
          <label htmlFor="product-price">Precio</label>
          <input
            type="number"
            id="product-price"
            className="product-name"
            placeholder=""
            {...register("price", {
              required: true
            })}
          />
          {errors.name?.type === "required" && (
            <span role="alert">Este input es requerido</span>
          )}
        </div>
        <div className="input-wrapper-isAvailable">
          <label htmlFor="product-isAvailable">Disponible</label>
          <input
            type="checkbox"
            id="product-isAvailable"
            {...register("isAvailable", {
              required: false
            })}
          />
          {errors.name?.type === "required" && (
            <span role="alert">Este input es requerido</span>
          )}
        </div>
        <button className="btn-edit" type="submit">
          Crear
        </button>
      </form>
    </div>
  );
};

export default ProductsForm;
