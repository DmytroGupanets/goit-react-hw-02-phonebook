import React from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";

const Filter = ({ onHandleChange, filter }) => {
  return (
    <div className={styles.filterContiner}>
      <label className={styles.label}>
        Find contacts by name:
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={onHandleChange}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  onHandleChange: PropTypes.func.isRequired,
  filter: PropTypes.string,
};

export default Filter;
