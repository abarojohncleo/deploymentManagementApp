import React from "react";
import { Typography } from "@mui/material";

const PageTitle = ({title}) => {
  return (
    <Typography variant="h3" component="h1" gutterBottom className="font-bold">{title}</Typography>
  )
}

export default PageTitle;