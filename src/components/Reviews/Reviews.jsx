import PropTypes from 'prop-types';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState, useEffect, cloneElement } from 'react';
import { useLocation } from 'react-router-dom';
import {
  CastList,
  CastItem,
  Poster,
  Text,
  MainContainer,
  WindowS,
  AllPageContainer,
  AvatarContainer,
} from './Reviews.styled';
import noAvatar from '../../img/no-photo.jpg';

const Reviews = ({ reviews }) => {
  const PAGE_WIDTH = 750;

  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState(0);

  const location = useLocation();
  console.log(location);

  useEffect(() => {
    setPages(
      reviews.map(review => {
        return cloneElement(review);
      })
    );
  }, [reviews]);

  const handleLeftArrowClick = () => {
    setOffset(currentOffset => {
      const newOffset = currentOffset + PAGE_WIDTH;

      return Math.min(newOffset, 0);
    });
  };
  const handleRightArrowClick = () => {
    setOffset(currentOffset => {
      const newOffset = currentOffset - PAGE_WIDTH;
      const maxOffset = -(PAGE_WIDTH * (pages.length - 1));
      return Math.max(newOffset, maxOffset);
    });
  };

  return (
    <MainContainer>
      <FaChevronLeft onClick={handleLeftArrowClick} />
      <WindowS>
        <AllPageContainer style={{ transform: `translate(${offset}px)` }}>
          <CastList>
            {reviews.map(({ id, author, text, details }) => {
              console.log(details);
              const { avatar_path, username } = details;
              console.log(avatar_path);
              return (
                <CastItem key={id}>
                  <AvatarContainer>
                    <Poster src={noAvatar} alt={username} width="50px" />
                    <h3>{author}</h3>
                  </AvatarContainer>
                  <Text>{text}</Text>
                </CastItem>
              );
            })}
          </CastList>
        </AllPageContainer>
      </WindowS>
      <FaChevronRight onClick={handleRightArrowClick} />
    </MainContainer>
  );
};

Reviews.prototype = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      author: PropTypes.string,
      text: PropTypes.string,
      details: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          avatar_path: PropTypes.string,
        })
      ),
    })
  ).isRequired,
};

export default Reviews;
