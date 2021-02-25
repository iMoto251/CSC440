import React, { Fragment } from 'react';
import styled from 'styled-components';

const Span = styled.span`
  color: ${props=> props.stocked? "black" : "red"};
`;



function ProductRow({product}) {
  return (
    <Fragment>
      <Span stocked={product.stocked} >
        {product.name}
      </Span>
      <span>{product.price}</span>
    </Fragment>
  );
}

export default ProductRow;
