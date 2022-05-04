import styles from './OptionColor.module.scss'
import PropTypes from 'prop-types';
import clsx from 'clsx';

const makeColorClassName = color => {
  return styles['color' + color[0].toUpperCase() + color.slice(1)];
};

const OptionColor = props => {
  return (
    <div className={styles.colors}>
    <h3 className={styles.optionLabel}>Colors</h3>
    <ul className={styles.choices}>
     {props.color.map((item) =>
        <li key={item}>
          <button type="button" onClick={() => props.setCurColor(item)} className={clsx(makeColorClassName(item), item === props.curColor && styles.active)} />
        </li> 
      )}
    </ul>
  </div>
  );
};

OptionColor.propTypes = {
  curColor: PropTypes.string.isRequired,
};

export default OptionColor
