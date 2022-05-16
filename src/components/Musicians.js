import React from "react";
import Musician from "./Musician";
import Grid from "@mui/material/Grid";

export default function Musicians({ selectedMusicians }) {
  return (
    <div className="musicians">
      <Grid container spacing={2}>
        {selectedMusicians.map((element) => {
          return <Musician key={element.id} musician={element} />;
        })}
      </Grid>
    </div>
  );
}
