import React from "react";
import { Tooltip } from '@mui/material';

const LogoutIcon = ({color="#000", width="32px", height="auto", showTooltip=false, tooltipText="", tooltipPlacement="" }) => {
  return (
    <Tooltip title={showTooltip ? tooltipText : ""} placement={tooltipPlacement} >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 89.6 122.88"
        fill={color} width={width} height={height} 
      >
        <path d="M66.4 68.67H40.29a7.23 7.23 0 010-14.45H66.4l-8.48-9.47a7.25 7.25 0 01.51-10.16 7.07 7.07 0 0110.05.51l19.28 21.52a7.27 7.27 0 01-.06 9.72L68.48 87.78a7.05 7.05 0 01-10.05.51 7.25 7.25 0 01-.51-10.16l8.48-9.46zM40.11.14a7.22 7.22 0 012.83 14.17l-3.39.69c-16.33 3.24-25.1 5.09-25.1 27.69v39.56c0 21 9.34 22.76 24.8 25.65l3.63.68a7.21 7.21 0 11-2.71 14.17l-3.57-.68C13.78 117.81 0 115.23 0 82.25V42.67C0 8.24 12.84 5.56 36.74.82l3.37-.68z"></path>
      </svg>
    </Tooltip>
  );
}

export default LogoutIcon;
