import React from "react";
import { Tooltip } from '@mui/material';

const ViewIcon = ({color="#000", width="32px", height="auto", showTooltip=false, tooltipText="", tooltipPlacement="" }) => {
  return (
    <Tooltip title={showTooltip ? tooltipText : ""} placement={tooltipPlacement} >
      <svg
        width={width} height={height}
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        enableBackground="new 0 0 122.88 83.78"
        version="1.1"
        viewBox="0 0 122.88 83.78"
        xmlSpace="preserve"
      >
        <path d="M95.73 10.81c10.53 7.09 19.6 17.37 26.48 29.86l.67 1.22-.67 1.21c-6.88 12.49-15.96 22.77-26.48 29.86-10.27 6.92-21.93 10.82-34.29 10.82s-24.02-3.9-34.28-10.81C16.62 65.87 7.55 55.59.67 43.1L0 41.89l.67-1.22C7.55 28.18 16.62 17.9 27.15 10.81 37.42 3.9 49.08 0 61.44 0s24.01 3.9 34.29 10.81zM60.79 22.17l4.08.39a13.814 13.814 0 00-2.31 7.67c0 7.48 5.86 13.54 13.1 13.54 2.32 0 4.5-.62 6.39-1.72.03.47.05.94.05 1.42 0 11.77-9.54 21.31-21.31 21.31s-21.31-9.54-21.31-21.31c0-11.76 9.54-21.3 21.31-21.3zM109 41.89c-5.5-9.66-12.61-17.6-20.79-23.11-8.05-5.42-17.15-8.48-26.77-8.48-9.61 0-18.71 3.06-26.76 8.48-8.18 5.51-15.29 13.45-20.8 23.11 5.5 9.66 12.62 17.6 20.8 23.1 8.05 5.42 17.15 8.48 26.76 8.48 9.62 0 18.71-3.06 26.77-8.48 8.18-5.5 15.29-13.44 20.79-23.1z"></path>
      </svg>
    </Tooltip>
  );
}

export default ViewIcon;
