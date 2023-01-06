import * as React from "react";

import { Card, CardMedia, CardContent, Box } from "@mui/material";
// import Card from "@mui/material/Card";
// import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

interface CardProps {
  cardTitle: string;
  cardMedia: string;
  cardText: string;
  imageCredits?: string;
}

const CharacteriscticsCard = ({
  cardMedia,
  cardText,
  cardTitle,
}: CardProps) => {
  return (
    <Box>
      <Typography
        variant="h5"
        textAlign="center"
        sx={{
          backgroundColor: "#000823",
          paddingX: 5,
          paddingY: 2,
          color: "white",
          borderRadius: 2,
          position: "relative",
          top: { xs: 30, sm: 0 },
          left: { xs: -30, sm: 0 },
          zIndex: 1,
        }}
      >
        {cardTitle}
      </Typography>
      <Card
        sx={{
          maxWidth: 345,
          minHeight: 490,
          justifyContent: "center",
          position: "relative",
        }}
      >
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
    </Box>
  );
};

export default CharacteriscticsCard;
