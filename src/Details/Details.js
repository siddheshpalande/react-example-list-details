import React from "react";
import { Link } from "react-router-dom";
import styles from "./Details.module.scss";
import PropTypes from 'prop-types';


function Details({ match, data }) {
  if (data) {
    return (
      <>
      <div className={styles.navigateBack}>
      <Link to="/users">Navigate back to List</Link>
      </div>
        <div className={styles.detailsContainer}>
          <div>
            <span>ID:</span>
            <span className={styles.dataField}>{data.id}</span>
          </div>
          <div>
            <span>Name:</span>
            <span className={styles.dataField}>{data.name}</span>
          </div>
          <div>
            <span>Email:</span>
            <span className={styles.dataField}>{data.email}</span>
          </div>
        </div>
      </>
    );
  }
  return null;
}

Details.propTypes = {
  data: PropTypes.object,
  match: PropTypes.object
}

export default Details;
