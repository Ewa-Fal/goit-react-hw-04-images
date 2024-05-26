import React from 'react';
import { ProgressBar } from 'react-loader-spinner';
import css from './Loader.module.css';

const LoaderSpinner = () => {
  return (
    <div className={css.Loader}>
      <ProgressBar
        height="200"
        width="200"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="darkcyan"
        barColor="lightskyblue"
      />
    </div>
  );
};

export default LoaderSpinner;