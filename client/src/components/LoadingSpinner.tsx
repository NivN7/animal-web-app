import React from "react";

interface LoadingSpinnerProps {
  width?: string;
  height?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  width = "24px",
  height = "24px",
}) => {
  const spinnerStyle = {
    width,
    height,
  };

  return <div className="loader mx-auto my-auto " style={spinnerStyle}></div>;
};

export default LoadingSpinner;
