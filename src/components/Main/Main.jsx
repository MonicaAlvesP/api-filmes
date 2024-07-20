import { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Grid, CircularProgress, Button, TextField } from "@mui/material";

export default function Main() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const moviesPerPage = 9;

  const getData = async () => {
    try {
      const resp = await axios.get('https://api.sampleapis.com/movies/mystery');
      setData(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const filteredMovies = data.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const startIndex = (currentPage - 1) * moviesPerPage;
  const currentMovies = filteredMovies.slice(startIndex, startIndex + moviesPerPage);

  return (
    <main>
      <TextField
        label="Buscar filmes"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <Grid container spacing={2}>
        {data.length > 0 ? (
          currentMovies.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Typography variant="h4">{item.title}</Typography>
              <img src={item.posterURL} alt={item.title} />
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <CircularProgress />
          </Grid>
        )}
      </Grid>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handlePreviousPage} 
          disabled={currentPage === 1}
        >
          Anterior
        </Button>
        <Typography variant="h6" style={{ margin: '0 20px' }}>
          Página {currentPage}
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleNextPage} 
          disabled={startIndex + moviesPerPage >= filteredMovies.length}
        >
          Próxima
        </Button>
      </div>
    </main>
  );
}
