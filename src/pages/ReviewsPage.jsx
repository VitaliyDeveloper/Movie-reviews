import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/fetchMovieReviews';
import Reviews from 'components/Reviews/Reviews';
import { NotificationsReviews } from 'components/Notifications/Notifications';

const ReviewsPage = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieReviews(movieId).then(({ results }) => {
      const reviewsArr = [];

      results.map(({ id, author, content, author_details }) => {
        const review = {
          id,
          author,
          text: content,
          details: author_details,
        };
        return reviewsArr.push(review);
      });

      setReviews(reviewsArr);
    });
  }, [movieId]);

  return reviews && reviews.length > 0 ? (
    <Reviews reviews={reviews} />
  ) : (
    <NotificationsReviews />
  );
};

export default ReviewsPage;
