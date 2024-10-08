import React from "react";
import { Tooltip } from '@mui/material';

const SortIcon = ({color="#000", width="32px", height="auto", showTooltip=false, tooltipText="", tooltipPlacement="" }) => {
  return (
    <Tooltip title={showTooltip ? tooltipText : ""} placement={tooltipPlacement} >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clipRule="evenodd"
        imageRendering="optimizeQuality"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        viewBox="0 0 485 511.82"
        width={width} height={height}
        fill={color}
      >
        <path
          fillRule="nonzero"
          d="M276.55 208.92v-29.43l14.65-2.14L353.48 0h54.5l62.41 177.35 14.61 2.14v29.43h-78.04v-29.43l13.67-2.56-6.32-22.64h-67.15l-6.02 22.64 13.62 2.56v29.43h-78.21zm-102.78-84.45H132.3v380.26c0 3.54-3.5 7.09-7.09 7.09H64.3c-3.64 0-7.18-3.17-7.18-7.09V124.47H15.69c-3.64 0-7.31-1.24-10.26-3.84-6.57-5.68-7.26-15.64-1.62-22.17L84.93 5.38c6.45-7.13 17.68-7.22 23.96.3l76.55 92.48c2.56 2.82 4.05 6.58 4.05 10.59 0 8.76-7 15.72-15.72 15.72zm184.02-5.51h45.75L383.17 55.7l-2.31-7.3h-.85l-2.44 8.03-19.78 62.53zm-57.02 392.69v-31.44l97.69-138.91h-52.71l-3.72 26.56h-37.72l2.7-65.14h154.71v30.33L363.73 473.2h62.66l4.02-24.82h37.63l-4.14 63.27H300.77z"
        ></path>
      </svg>
    </Tooltip>
  );
}

export default SortIcon;
