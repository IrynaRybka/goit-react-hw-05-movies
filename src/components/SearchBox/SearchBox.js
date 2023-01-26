import PropTypes from 'prop-types';
import css from './SearchBox.module.css';

export const SearchBox = ({ onChange, value }) => {
  return (
    <div className={css.search}>
      <h1>Find the movie</h1>
      <input
        className={css.search_input}
        type="text"
        value={value}
        placeholder="Tipe film"
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
};
SearchBox.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};
