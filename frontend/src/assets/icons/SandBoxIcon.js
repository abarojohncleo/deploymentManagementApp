/* React */
import React from 'react';

/* Material UI */
import { Tooltip } from '@mui/material';

/* Icon definition from www.uxwing.com */
const SandBoxIcon = ({color="#000", width="32px", height="auto", showTooltip=false, tooltipText="", tooltipPlacement=""}) => {
    return (
        <Tooltip title={showTooltip ? tooltipText : ""} placement={tooltipPlacement} >
            <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px" y="0px"
                viewBox="0 0 122.88 91.26"
                fill={color} width={width} height={height} >
                <g>
                    <path d="M92.45,8.98c-1.35-0.94-2.88-1.35-4.44-1.04c-1.56,0.31-2.88,1.15-3.82,2.46l-5.27,7.43 c-1.87-0.83-3.82-1.46-5.9-1.98s-4.03-0.94-6.11-1.25l-1.67-9.72C64.94,3.21,64.09,2,62.89,1.06c-1.35-0.94-2.78-1.25-4.44-0.94 L46.26,2.31c-1.56,0.31-2.78,1.04-3.82,2.39c-0.94,1.35-1.35,2.78-1.04,4.44l1.56,8.88c-1.98,0.83-3.82,1.77-5.59,2.88 c-1.77,1.04-3.5,2.29-5.07,3.5l-8.26-5.69c-1.35-0.94-2.78-1.35-4.34-1.04c-1.56,0.31-2.88,1.15-3.82,2.5L8.85,30.22 c-0.94,1.35-1.35,2.88-1.04,4.44c0.31,1.67,1.15,2.88,2.5,3.82l7.43,5.27c-0.83,1.87-1.46,3.82-1.98,5.9 c-0.52,2.08-0.94,4.03-1.25,6.11L4.8,57.42c-8.24,1.55-3.58,13.36-2.57,18.98c0.31,1.56,1.04,2.78,2.36,3.82 c1.35,0.94,2.78,1.35,4.44,1.04l8.88-1.56c0.83,1.98,1.77,3.82,2.88,5.59c1.04,1.77,2.29,3.5,3.5,5.17l-5.69,8.16 c-0.94,1.35-1.35,2.78-1.04,4.34c0.31,1.56,1.14,2.88,2.46,3.82l10.13,7.11c1.35,0.94,2.88,1.25,4.44,0.94 c1.56-0.31,2.88-1.04,3.92-2.36l5.28-7.53c1.87,0.83,3.82,1.46,5.9,1.98c2.08,0.52,4.02,0.94,6.11,1.25l1.67,9.72 c0.31,1.67,1.15,2.88,2.36,3.82c1.35,0.94,2.78,1.25,4.44,0.94l12.18-2.19c1.56-0.31,2.78-1.04,3.82-2.36 c0.94-1.35,1.35-2.78,1.04-4.44l-1.56-8.88c1.98-0.83,3.82-1.77,5.59-2.88c1.77-1.04,3.51-2.26,5.17-3.5l8.16,5.69 c1.35,0.94,2.78,1.35,4.44,1.04c1.67-0.31,2.88-1.15,3.82-2.46l7.11-10.14c0.94-1.35,1.25-2.88,0.94-4.44s-1.04-2.88-2.39-3.92 L105.05,79c0.83-1.87,1.46-3.82,1.98-5.9c0.52-2.08,0.94-4.03,1.25-6.11l9.72-1.67c1.67-0.31,2.88-1.15,3.82-2.39 c0.94-1.35,1.25-2.78,0.94-4.44l-2.19-12.18c-0.31-1.56-1.04-2.78-2.36-3.82c-1.35-0.94-2.78-1.35-4.44-1.04l-8.88,1.56 c-0.83-1.87-1.77-3.71-2.88-5.59c-1.04-1.87-2.29-3.5-3.5-5.07l5.69-8.26c0.94-1.35,1.35-2.78,1.04-4.34 c-0.31-1.56-1.15-2.88-2.46-3.82L92.73,8.87L92.45,8.98L92.45,8.98L92.45,8.98L92.45,8.98z M57.12,44.41h5.12 c0.93,0,1.7,0.77,1.7,1.7v17.12h15.03c0.94,0,1.71,0.77,1.71,1.7v5.12c0,0.94-0.77,1.7-1.71,1.7H55.4V46.12 C55.4,45.18,56.17,44.41,57.12,44.41L57.12,44.41L57.12,44.41z M55.41,28.79c4.39-0.72,8.84-0.72,13.23,0.29 c4.25,1,8.12,2.72,11.65,5.11c3.39,2.44,6.4,5.54,8.84,9.26c2.44,3.68,3.97,7.84,4.68,12.23c0.72,4.39,0.72,8.84-0.29,13.23 c-1,4.25-2.72,8.12-5.11,11.65c-2.44,3.39-5.54,6.4-9.27,8.84c-3.68,2.44-7.84,3.97-12.23,4.68c-4.39,0.72-8.84,0.72-13.23-0.29 c-4.25-1-8.12-2.72-11.65-5.11c-3.39-2.44-6.4-5.54-8.84-9.26c-2.44-3.68-3.97-7.84-4.68-12.23c-0.72-4.39-0.72-8.84,0.29-13.23 c1-4.25,2.72-8.12,5.11-11.65c2.44-3.39,5.54-6.4,9.27-8.84C46.91,31.08,51.01,29.5,55.41,28.79L55.41,28.79L55.41,28.79 L55.41,28.79z"/>
                </g>
            </svg>
        </Tooltip>
    )
}

export default SandBoxIcon;