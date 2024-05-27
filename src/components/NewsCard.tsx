import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import defaultMedia from "./../Media/kelvin-fumo-high-resolution-logo-black-transparent.png";

interface Props {
  img: string;
  category: string;
  headline: string;
  link: string;
}

export const ImgMediaCard = ({ img, category, headline, link }: Props) => {
  return (
    <Card sx={{ maxWidth: 345, margin: "5%" }}>
      {img.length > 0 ? (
        <CardMedia
          component="img"
          alt="News image"
          height="140"
          image={img}
          onClick={() => window.open(link, "_blank")}
          sx={{ cursor: "pointer" }}
        />
      ) : (
        <CardMedia
          component="img"
          alt="News image"
          height="140"
          image={defaultMedia}
          onClick={() => window.open(link, "_blank")}
          sx={{ cursor: "pointer" }}
        />
      )}

      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          onClick={() => window.open(link, "_blank")}
          sx={{ cursor: "pointer" }}
        >
          {category}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          onClick={() => window.open(link, "_blank")}
          sx={{ cursor: "pointer" }}
        >
          {headline}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
};

export default ImgMediaCard;
