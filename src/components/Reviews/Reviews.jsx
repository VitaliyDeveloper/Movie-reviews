import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState, useEffect } from 'react';
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
import { cloneElement } from 'react';
import noAvatar from '../../img/no-photo.jpg';

export const Reviews = ({ reviews }) => {
  const PAGE_WIDTH = 750;

  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState(0);

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
              console.log(details.avatar_path);
              return (
                <CastItem key={id}>
                  <AvatarContainer>
                    <Poster
                      src={
                        details.avatar_path
                          ? 'https://www.gravatar.com/avatar/992eef352126a53d7e141bf9e8707576.jpg'
                          : noAvatar
                      }
                      alt={details.name}
                      width="50px"
                    />
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
