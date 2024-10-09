import React from "react";
import { Tooltip } from '@mui/material';

const EditIcon = ({color="#000", width="32px", height="auto", showTooltip=false, tooltipText="", tooltipPlacement="" }) => {
  return (
    <Tooltip title={showTooltip ? tooltipText : ""} placement={tooltipPlacement} >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        enableBackground="new 0 0 40.49 122.88"
        version="1.1"
        viewBox="0 0 40.49 122.88"
        xmlSpace="preserve"
        width={width} height={height}
        fill={color}
      >
        <path d="M39.94 40.27v82.61H.48V40.27H0l1.17-2.4L18.16 2.98 19.61 0l1.53 2.95 18.09 34.89 1.26 2.43h-.55zM23.47 14.68h-7.29L5.34 36.93H35L23.47 14.68z"></path>
      </svg>
    </Tooltip>
  );
}

export default EditIcon;
