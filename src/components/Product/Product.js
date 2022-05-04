import styles from './Product.module.scss';
import { useState } from 'react';
import PropTypes from 'prop-types';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = props => {

  Product.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    basePrice: PropTypes.number.isRequired,
    color: PropTypes.array.isRequired,
    sizes: PropTypes.array.isRequired
  }

  const [curColor, setCurColor] = useState(props.colors[0]);
  const [curSize, setCurSize] = useState(props.sizes[0].name);
  const [curPrice, setCurPrice] = useState(props.basePrice);
  const [additionalPrice, setAdditionalPrice] = useState('');

  const getPrice = (price) => {
    return setAdditionalPrice(price);
  };

  const summaryPrice = curPrice + additionalPrice;


  return (
    <article className={styles.product}>
      <ProductImage name={props.name} curColor={curColor}/>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {summaryPrice}$</span>
        </header>
        <ProductForm curSize={curSize} setCurSize={setCurSize} getPrice={getPrice} sizes={props.sizes} curColor={curColor} setCurColor={setCurColor} color={props.colors} title={props.title} curPrice={summaryPrice} setCurPrice={setCurPrice} />
      </div>
    </article>
  )

};

export default Product;
