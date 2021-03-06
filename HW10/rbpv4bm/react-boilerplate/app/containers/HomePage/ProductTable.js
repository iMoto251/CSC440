import React, { Fragment } from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  justify-items: left;
  grid-column-gap: 2em;
  margin: 0 auto;
`;

const H3 = styled.h3`
  justify-self: center;
`;

function ProductTable(props) {
    const filterText = props.filterText;
    const inStockOnly = props.inStockOnly;

    const rows = [];
    let lastCategory = null;

    props.products.forEach((product) => {
      if (product.name.indexOf(filterText) === -1) {
        return;
      }
      if (inStockOnly && !product.stocked) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name}
        />
      );
      lastCategory = product.category;
    });

    return (
      <Wrapper>
        <Fragment>
          <H3>Name</H3>
          <H3>Price</H3>
          {rows}
        </Fragment>
      </Wrapper>
    );
}

export default ProductTable;
