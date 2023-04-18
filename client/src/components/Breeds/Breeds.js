import React, {useState, useEffect} from "react";
import TablePagination from '@mui/material/TablePagination';
import BreedCard from "./BreedCard";

export default function Breeds(){
    const [breeds, setBreeds] = useState([])
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10)
    const [onScreen, setOnScreen] = useState([])
    // const [queryDog, setQueryDog] = useState("")
    // const [grabbedDogs, setGrabbedDogs] = useState([])

    
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    
    useEffect(() => {
        fetch("http://localhost:3000/breeds/", {
            method: "GET",
            headers: {
              "Content-type": "application/json",
              uid: localStorage.uid,
            },})
        .then( r => r.json())
        .then(breedData => setBreeds(breedData))
    }, [])

    useEffect(() => {
        if (breeds){
            let chunk = sliceIntoChunks(breeds, rowsPerPage)
            setOnScreen(chunk)
        }
        
    }, [breeds, rowsPerPage])
    
    function sliceIntoChunks(arr, chunkSize) {
        const res = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            const chunk = arr.slice(i, i + chunkSize);
            res.push(chunk);
        }
        return res;
    }

    return(
    <>
        <TablePagination
        sx={{backgroundColor: '#F6AE2D'}}
        component="div"
        count={172}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    {onScreen[page]?.map((breed) => (<BreedCard key={breed.id} breed={breed}/>))}
        </div>

    </>
    )
}
