import React from "react"
import styled from "@emotion/styled"
import { useNavigate } from "react-router-dom"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BreedCard ({breed}) {
  const navigate = useNavigate()
     
 const handleClick = (() => {
    navigate(`/breeds/${breed.id}`, {state: {id: breed.id}})
  })
    return(
        <div>
          <Card sx={{ maxWidth: 450, margin: 5, backgroundColor: "#F5A614" }}>
      <CardMedia
        sx={{ height: 'auto', width: 450}}
        component="img"
        image={breed.image_url}
        title={breed.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" sx={{color:"#1F1A38", fontFamily: 'Mulish'}} component="div">
        {breed.name}
        </Typography>
        <Typography variant="body2" sx={{color:"#1F1A38", fontFamily: 'Lato'}}>
        Temperament: {breed.temperament}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"  onClick={ () => handleClick()}>Learn More</Button>
      </CardActions>
    </Card>
            </div>
    )
}
