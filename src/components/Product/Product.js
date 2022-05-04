import styles from './Product.module.scss';
import { useState } from 'react';
import PropTypes from 'prop-types';
import ProductImage from '../ProductImage/ProductImage';
import clsx from 'clsx';
import Button from '../Button/Button';

const prepareColorClassName = color => {
  return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
};

const Product = props => {

console.log('props', props.colors);

  Product.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    title: PropTypes.string,
    basePrice: PropTypes.number,
  }

  const [CurColor, setCurColor] = useState(0);
  const [CurSize, setCurSize] = useState(0);

  return (
    <article className={styles.product}>
      <ProductImage name={props.name} CurColor={props.colors[CurColor]}/>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {props.basePrice}$</span>
        </header>

        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map((size, index) =>
              <li key={index}>
                <button type="button" onClick={() => setCurSize(index)} className={clsx(index === CurSize && styles.active)}>{size.name}</button>
              </li>)}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
             {props.colors.map((item, index) =>
                <li key={item}>
                  <button type="button" onClick={() => setCurColor(index)} className={clsx(prepareColorClassName(item), index === CurColor && styles.active)} />
                </li>
              )}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
     </article>
  )
};

export default Product;
