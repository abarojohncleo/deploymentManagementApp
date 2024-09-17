import React from 'react';
import { Tooltip } from '@mui/material';

/* Icon definition from www.uxwing.com */
const CollapseMenuIcon = ({color='white', width="32px", height="auto", showTooltip=false, tooltipText="", tooltipPlacement=""}) => {
    return (
        <Tooltip title={showTooltip ? tooltipText : ""} placement={tooltipPlacement} >
            <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 389.24" fill={color} width={width} height={height}><path fill-rule="nonzero" d="M512 50.04H236.9V0H512v50.04zm-361.79 65.1-54.45 54.44H512v50.04H95.79l54.42 54.41-35.39 35.39L0 194.6v-.03l35.39-35.36 79.43-79.46 35.39 35.39zM512 389.24H236.9V339.2H512v50.04z"/></svg>
        </Tooltip>
    )
}

export default CollapseMenuIcon;