import React from "react";
import './loading.css';

export const Loading = ({ isLoading, children }) => {

  return (
    <>
      {isLoading ? (
        <div className="loading grid content-center h-full basis-full">
          <div>
            <div className={`dot`}></div>
            <div className={`dot`}></div>
            <div className={`dot`}></div>
            <div className={`dot`}></div>
            <div className={`dot`}></div>
          </div>
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
};
