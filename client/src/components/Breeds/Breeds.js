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
        fetch("https://api.thedogapi.com/v1/breeds")
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
      component="div"
      count={172}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      />

      {onScreen[page]?.map((breed) => (<BreedCard key= {breed.id} breed= {breed}/>))}
      {console.log(onScreen)}
    </>
    )
}

