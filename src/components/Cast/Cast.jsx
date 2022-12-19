import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';
import {
  CastList,
  CastItem,
  Poster,
  NameText,
  MainContainer,
  WindowS,
  AllPageContainer,
} from './Cast.styled';
import noPhoto from '../../img/no-photo.jpg';
import { useEffect } from 'react';
import { cloneElement } from 'react';

const PAGE_WIDTH = 600;

export const Cast = ({ actors }) => {
  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setPages(
      actors.map(actor => {
        return cloneElement(actor);
      })
    );
  }, [actors]);

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
            {actors.map(({ id, name, photo }) => {
              return (
                <CastItem key={id}>
                  <Poster
                    src={
                      photo
                        ? `https://image.tmdb.org/t/p/w500/${photo}`
                        : noPhoto
                    }
                    alt="name"
                    height="150px"
                  />
                  <NameText>{name}</NameText>
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
