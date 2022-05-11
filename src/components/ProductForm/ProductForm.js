import styles from './ProductForm.module.scss';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const makeSummary = props => {
  return console.log(
      'SUMMARY',
      '\n=======',
      '\nNAME:\t',props.title,
      '\nPRICE:\t',props.curPrice,
      '\nSIZE:\t', props.curSize,
      '\nCOLOR:\t', props.curColor, '\n',
      )
  }

const ProductForm = props => {
  return (
    <form>
      <OptionSize curSize={props.curSize} setCurSize={props.setCurSize} getPrice={props.getPrice} sizes={props.sizes} />
      <OptionColor curColor={props.curColor} setCurColor={props.setCurColor} color={props.color} />
      <Button className={styles.button} 
      onClick={(e) => {
        e.preventDefault();
        makeSummary(props)
      }}>
        <span className='fa fa-shopping-cart' />
      </Button>
    </form>
  )
}

ProductForm.propTypes = {
  title: PropTypes.string.isRequired,
  curColor: PropTypes.string.isRequired,
  color: PropTypes.array.isRequired,
  curSize: PropTypes.string.isRequired,
  sizes: PropTypes.array.isRequired,
  setCurSize: PropTypes.func.isRequired,
  setCurColor: PropTypes.func.isRequired,
};

export default ProductForm;
