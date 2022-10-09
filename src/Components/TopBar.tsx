import React from "react";
import { Grid } from "@mui/material";

type Props = {
  header: string;
};

function TopBar(props: Props) {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="flex-start" >
      <h2>{props.header}</h2>
    </Grid>
  );
}

export default TopBar;
