import React, {useState} from 'react';

function ProductRow(props) {
  const product = props.product;
    const name = product.stocked ?
      product.name :
      <span style={{color: 'red'}}>
        {product.name}
      </span>;

    const quantity = product.quantity > 10 ?
      product.quantity :
      <span style={{color: 'goldenrod'}}>
        {product.quantity}
      </span>;

      


  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
      <td>{quantity}</td>
    </tr>
    
  );
}

export default ProductRow;
