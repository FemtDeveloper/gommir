import * as React from "react";

import { Card, CardMedia, CardContent, Box, Button } from "@mui/material";
// import Card from "@mui/material/Card";
// import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import Link from "next/link";

interface CardProps {
  cardTitle: string;
  cardMedia: string;
  cardText: string;
  imageCredits?: string;
  cardStyles?: Object;
  cardLink?: string;
}

const CharacteriscticsCard = ({
  cardMedia,
  cardText,
  cardTitle,
  cardStyles,
  cardLink,
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
        sx={
          !cardStyles
            ? {
                maxWidth: 345,
                minHeight: 490,
                position: "relative",
              }
            : {
                ...cardStyles,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                position: "relative",
                maxWidth: 345,
              }
        }
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
        {cardLink && (
          <Link href={`/${cardLink}`} style={{ textAlign: "end" }}>
            <Button color="secondary" sx={{ mr: 0 }}>
              Ver más...
            </Button>
          </Link>
        )}
      </Card>
    </Box>
  );
};

export default CharacteriscticsCard;
