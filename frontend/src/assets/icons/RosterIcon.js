import React from "react";
import { Tooltip } from '@mui/material';

const RosterIcon = ({color="#000", width="32px", height="auto", showTooltip=false, tooltipText="", tooltipPlacement="" }) => {
  return (
    <Tooltip title={showTooltip ? tooltipText : ""} placement={tooltipPlacement} >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width} height={height}
        fill={color}
        x="0"
        y="0"
        enableBackground="new 0 0 99.39 122.88"
        version="1.1"
        viewBox="0 0 99.39 122.88"
        xmlSpace="preserve"
      >
        <path d="M65.72 12.72c-.31 0-.58-.04-.85-.13-1.38 0-2.54-1.12-2.54-2.54v-5H37.7v5c0 1.29-1.03 2.41-2.28 2.5-.27.09-.58.13-.89.13h-9.28v10.35h48.59V12.67h-8.21l.09.05zM22.85 75.03c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5zM17.07 62.7c-.69-1.03-.42-2.43.62-3.12 1.03-.69 2.43-.42 3.12.62l1.23 1.82 4.87-5.92a2.253 2.253 0 013.48 2.86l-6.74 8.2c-.15.19-.33.36-.54.51-1.03.69-2.43.42-3.12-.62l-2.92-4.35zm0-17.32c-.69-1.03-.42-2.43.62-3.12 1.03-.69 2.43-.42 3.12.62l1.23 1.82 4.87-5.93a2.253 2.253 0 013.48 2.86l-6.74 8.2c-.15.19-.33.36-.54.51-1.03.69-2.43.42-3.12-.62l-2.92-4.34zm52.13 76.83c-.45.4-1.07.67-1.7.67-.13 0-.27 0-.4-.04H5.62c-1.52 0-2.94-.62-3.97-1.65A5.558 5.558 0 010 117.21V19.85c0-1.56.62-2.94 1.65-3.97a5.552 5.552 0 013.97-1.65h14.63v-2.77c0-1.03.4-1.96 1.12-2.68.67-.67 1.61-1.12 2.68-1.12h8.66V4.19c0-1.16.49-2.19 1.25-2.94C34.71.49 35.74 0 36.9 0h26.37c1.16 0 2.19.49 2.94 1.25.76.76 1.25 1.78 1.25 2.94v3.48h7.81c1.03 0 1.96.45 2.68 1.12.67.67 1.12 1.65 1.12 2.68v2.77H93.7c1.56 0 2.94.62 3.97 1.65a5.552 5.552 0 011.65 3.97v70.23c.2 1.01-.01 1.79-.76 2.54l-29.05 29.4c-.09.09-.13.13-.22.18h-.09zm-4.24-4.42c0-33.62-4.24-29.63 29.22-29.63V19.85c0-.13-.04-.31-.18-.4a.558.558 0 00-.4-.18H78.97v5.09c0 1.03-.4 1.96-1.12 2.68-.67.67-1.61 1.12-2.68 1.12H24c-1.03 0-2.01-.45-2.68-1.12-.09-.09-.13-.18-.22-.27-.54-.67-.89-1.52-.89-2.41v-5.09H5.58c-.13 0-.31.04-.4.18a.67.67 0 00-.18.4v97.36c0 .18.04.31.18.4.09.09.22.18.4.18h59.38zM41.23 81.8c-1.38 0-2.54-1.12-2.54-2.54 0-1.38 1.12-2.54 2.54-2.54h24.13c1.38 0 2.54 1.12 2.54 2.54 0 1.38-1.12 2.54-2.54 2.54H41.23zm0-36.28c-1.38 0-2.54-1.12-2.54-2.54 0-1.38 1.12-2.54 2.54-2.54h37.16c1.38 0 2.54 1.12 2.54 2.54 0 1.38-1.12 2.54-2.54 2.54H41.23zm0 18.14c-1.38 0-2.54-1.12-2.54-2.54 0-1.38 1.12-2.54 2.54-2.54h37.16c1.38 0 2.54 1.12 2.54 2.54 0 1.38-1.12 2.54-2.54 2.54H41.23z"></path>
      </svg>
    </Tooltip>
  );
}

export default RosterIcon;
