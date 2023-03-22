import React, {useState, useEffect} from "react";


export default function Breeds(){
    const [breeds, setBreeds] = useState([])
    const [queryDog, setQueryDog] = useState("")
    const [grabbedDogs, setGrabbedDogs] = useState([])

    function getBreeds(){
        fetch("https://api.thedogapi.com/v1/breeds/2")
        .then( r => r.json())
        .then(data => console.log(data))
    }

    function handleSubmit(){
        fetch("https://api.thedogapi.com/v1/breeds/")
        .then( r => r.json())
        .then(data => console.log(data))
    }


    return(
        <>
        <form onSubmit= {handleSubmit}>

        </form>
        <button onClick={() => getBreeds()  }>Return Breeds</button>
        </>
    )
}