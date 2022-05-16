import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Musician({ musician }) {
  console.log(musician);
  return (
    <Grid item xs={12} md={3}>
      <Card
        // className="imp__musician"
        sx={{ maxWidth: 345 }}
      >
        <CardMedia
          component="img"
          width="100%"
          height="200"
          image={musician.image}
          alt={musician.id}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {musician.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {musician.description.substring(0, 200)}...
          </Typography>
        </CardContent>
        <CardActions>
          <a href={musician.link} target={"_blank"} rel="noopener noreferrer">
            <Button size="small">Learn More</Button>
          </a>
        </CardActions>
      </Card>
      {/* <div className="musician">
        <img src={musician.image} alt={musician.id} />
        <h2>{musician.name}</h2>
        <p>{musician.description}</p>
      </div> */}
    </Grid>
  );
}
