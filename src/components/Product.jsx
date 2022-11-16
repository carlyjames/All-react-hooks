import React, { Component } from "react";
import { Products } from "./Products";
import swal from 'sweetalert';
const Product = () => {
    const MoreInfo = (e) => {
        swal("Product Description",e.target.value);
    }
    const AddToCart = (e) => {
      swal({
        title: "Good job!",
        text: e.target.value + " added to cart",
        icon: "success",
        button: "Continue shopping",
      });
    }
     
  return (
    <div>
      {Products.map((product)   =>  (
        <div className="album py-2 w-full">
            <div className="col-md-4">
                <div className="card mt-2" key={product.id} >
                    <div className="card-header">{product.name}</div>
                    <div className="card-body">{product.description}</div>
                    <div className="card-footer">${product.price}</div>
                    <button className="btn btn-primary  mx-2 mb-2 p-3" value={product.description} onClick={MoreInfo}>Learn more</button>
                    <button className="btn btn-primary  mx-2 mb-2 p-3" value={product.description} onClick={AddToCart}>Add to cart</button>
                </div>
            </div>
        </div>
            
      ))}
    </div>
  );
};

export default Product;
