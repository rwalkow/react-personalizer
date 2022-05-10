import styles from './ProductImage.module.scss';
import PropTypes from 'prop-types';

const ProductImage = props => {
  return (
    <div className={styles.imageContainer}>
      <img className={styles.image} alt={props.title} src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${props.curColor}.jpg`} />
    </div>
  )
}

ProductImage.propTypes = {
  name: PropTypes.string.isRequired,
  curColor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ProductImage;
