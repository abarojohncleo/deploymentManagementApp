import React from "react";
import { Tooltip } from '@mui/material';

const DeleteIcon = ({color="#000", width="32px", height="auto", showTooltip=false, tooltipText="", tooltipPlacement="" }) => {
  return (
    <Tooltip title={showTooltip ? tooltipText : ""} placement={tooltipPlacement} >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width} height={height}
        fill={color}
        x="0"
        y="0"
        version="1.1"
        viewBox="0 0 109.484 122.88"
        xmlSpace="preserve"
      >
        <path
          fillRule="evenodd"
          d="M2.347 9.633h38.297V3.76A3.77 3.77 0 0144.404 0h21.144a3.77 3.77 0 013.76 3.76v5.874h37.83a2.353 2.353 0 012.347 2.349v11.514H0V11.982a2.354 2.354 0 012.347-2.349zM8.69 29.605h92.921c1.937 0 3.696 1.599 3.521 3.524l-7.864 86.229c-.174 1.926-1.59 3.521-3.523 3.521h-77.3c-1.934 0-3.352-1.592-3.524-3.521L5.166 33.129c-.172-1.932 1.585-3.524 3.524-3.524zm60.387 13.393h9.866v65.314h-9.866V42.998zm-39.005 0h9.867v65.314h-9.867V42.998zm19.5 0h9.869v65.314h-9.869V42.998z"
          clipRule="evenodd"
        ></path>
      </svg>
    </Tooltip>
  );
}

export default DeleteIcon;
