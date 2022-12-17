import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from '../services/fetchMovieById';

export const useFetchMovie = () => {
  const [movie, setMovie] = useState(null);
  const params = useParams();
  console.log(params);

  useEffect(() => {
    fetchMovieById();
  });
};
