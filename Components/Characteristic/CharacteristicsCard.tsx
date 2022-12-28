import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

interface CardProps {
  cardMedia: string;
  cardText: string;
}

const CharacteriscticsCard = ({ cardMedia, cardText }: CardProps) => {
  return (
    <Card sx={{ maxWidth: 345, minHeight: 490 }}>
      <CardMedia
        component="img"
        height="194"
        image={`${cardMedia}`}
        alt="Compromiso"
      />
      <CardContent>
        <Typography variant="body1" color="text.secondary">
          {cardText}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CharacteriscticsCard;
