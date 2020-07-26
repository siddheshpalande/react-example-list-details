import React from "react";
import {Link } from 'react-router-dom';
import styles from './List.module.scss';
import PropTypes from 'prop-types';

function List({ match, listData }) {
  return (
    <ul>
      {listData.map((item) => (
        <li key={item.id} className={styles.listItem}>
          <Link to={`${match.url}/${item.id}`}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
}


List.propTypes = {
  listData: PropTypes.arrayOf(PropTypes.object),
  match: PropTypes.object
}; 

export default List;
