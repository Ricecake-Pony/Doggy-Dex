import React from "react"
import styled from "@emotion/styled"
import { useNavigate } from "react-router-dom"


const Image = styled.img`
cursor: pointer;
background-x: center;
height: auto;
width: 300px;
`

const Card = styled.div `
border: 3px solid green;
margin: 10px;
padding-left: 10px;
`

export default function BreedCard ({breed}) {
  const navigate = useNavigate()
     
 const handleClick = (() => {
    navigate(`/breeds/${breed.id}`, {state: {id: breed.id}})
  })
    return(
        <div>
        <Card>
          <Image breed = {breed} src= {breed.image.url} onClick={ () => handleClick()}> 
          </Image>
          <br/>
        {breed.name}
                <ul>
                    Bred for: {breed.bred_for}
                    <br/>
                    Breed group: {breed.breed_group}
                    <br/>
                </ul>
            </Card>
            </div>
    )
}
