import styles from './OptionSize.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const OptionSize = props => {
  return (
    <div className={styles.sizes}>
    <h3 className={styles.optionLabel}>Sizes</h3>
    <ul className={styles.choices}>
      {props.sizes.map((size, index) =>
      <li key={index}>
        <button type="button" onClick={() => {
          props.setCurSize(size.name);
          props.getPrice(size.additionalPrice);
        }}
        className={clsx(size.name === props.curSize && styles.active)}>{size.name}</button>
      </li>)}
    </ul>
  </div>
  )
}

OptionSize.propTypes = {
  sizes: PropTypes.array.isRequired,
  curSize: PropTypes.string.isRequired,
  getPrice: PropTypes.number.isRequired,
  setCurSize: PropTypes.string.isRequired,
};

export default OptionSize;
