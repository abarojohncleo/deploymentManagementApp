import React from "react";
import { Tooltip } from '@mui/material';

const FilterIcon = ({color="#000", width="32px", height="auto", showTooltip=false, tooltipText="", tooltipPlacement="" }) => {
  return (
    <Tooltip title={showTooltip ? tooltipText : ""} placement={tooltipPlacement} >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        version="1.1"
        viewBox="0 0 122.88 107.128"
        xmlSpace="preserve"
        width={width} height={height}
        fill={color}
      >
        <path d="M2.788 0h117.297a2.795 2.795 0 011.817 4.919l-46.82 46.586v39.979A2.795 2.795 0 0173.506 94L51.42 106.752a2.792 2.792 0 01-4.187-2.414h-.006V51.496L.811 4.761A2.787 2.787 0 012.788.008V0zm110.535 5.591H9.493L51.851 48.24c.592.512.966 1.27.966 2.114v49.149l16.674-9.625V50.354h.008c0-.716.274-1.432.822-1.977l43.002-42.786z"></path>
      </svg>
    </Tooltip>
  );
}

export default FilterIcon;
