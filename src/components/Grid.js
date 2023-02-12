import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function Grid(props) {
  const img_url = props.user.avatar
  return (
    <Card sx={{ maxWidth: 355, margin: "3vh 2px 0" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          width="355"
          image={img_url}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.user.first_name + " " + props.user.last_name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.user.email}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

