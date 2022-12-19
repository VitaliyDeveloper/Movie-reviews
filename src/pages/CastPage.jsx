import { Cast } from 'components/Cast/Cast';
import { fetchMovieCredits } from 'services/fetchMovieCredits';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { NotificationsCast } from 'components/Notifications/Notifications';

export const CastPage = () => {
  const [actors, setActors] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCredits(movieId).then(({ cast }) => {
      const actorsArr = [];

      cast.map(({ id, name, profile_path }) => {
        const actor = {
          id,
          name,
          photo: profile_path,
        };

        return actorsArr.push(actor);
      });

      setActors(actorsArr);
    });
  }, [movieId]);

  return actors && actors.length > 0 ? (
    <Cast actors={actors} />
  ) : (
    <NotificationsCast />
  );
};
