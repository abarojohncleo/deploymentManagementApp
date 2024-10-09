import React from "react";

const FemaleIcon = ({color="#000", width="32px", height="auto", showTooltip=false, tooltipText="", tooltipPlacement="" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      imageRendering="optimizeQuality"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      viewBox="0 0 512 501.451"
      width={width} height={height}
        fill={color}
    >
      <path d="M90.396 260.923c38.16-40.465 18.438-130.599 36.706-183.524 25.655-74.227 120.495-99.594 173.333-56.158 41.432-4.412 83.182 16.956 92.184 80.835 7.36 52.248 2.867 123.098 28.979 163.408-27.902 26.737-71.407 29.008-107.856 30.963l1.118 8.425c1.82 13.68 1.801 16.655 12.249 28.273C376.651 388.21 512 338.219 512 494.87c0 3.625-2.959 6.581-6.592 6.581H6.592c-3.636 0-6.592-2.956-6.592-6.581 0-168.597 143.337-87.788 185.168-161.699 6.943-12.261 6.676-15.628 6.075-28.89l-.327-7.199c-39.105-1.85-73.255-3.68-100.52-36.159z"></path>
    </svg>
  );
}

export default FemaleIcon;
