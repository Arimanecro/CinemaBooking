import React, { FC, ReactElement } from "react";
import { Link } from "react-router-dom";
import { IonSlides, IonSlide } from "@ionic/react";
import styled from "styled-components";
import { ListOfMovies } from "../ListOfMovies";
import { I_ListOfMovies } from "../interfaces";

type coverProps = { bg: string };

const Category = styled.h1`
  font-size: 18px;
  line-height: 22px;
  text-decoration-line: underline;
  color: #ffffff;
`;
const Movie = styled.div`
  width: 152px;
  height: 287px;
  text-align: center;
  line-height: 21px;
`;
const Cover = styled.div`
  border-radius: 10px;
  height: 218px;
  margin-bottom: 5px;
  background: url(${(props: coverProps) => props.bg}) no-repeat;
  background-size: cover;
`;
const Title = styled.p`
  font-size: 16px;
  color: #fbfe80;
`;
const SubTitle = styled.p`
  font-size: 14px;
  color: #f96677;
`;
const Scroll = styled.div`
  width:100vw;
  height: 68vh;
  padding-left:6px;
  overflow: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  }
`;

const showMovies = (movies: I_ListOfMovies, category: "trending" | "new") => {
  return Object.keys(movies[category]).map((k, v) => {
    return (
      <IonSlide key={k}>
        <Link
          to={{
            pathname: `/movie/${category}/${movies[category][k]["title"]}`,
          }}
        >
          <Movie>
            <Cover bg={(movies[category][k]["cover"] as unknown) as string} />
            <Title>{movies[category][k].title}</Title>
            <SubTitle>{movies[category][k].genre}</SubTitle>
          </Movie>
        </Link>
      </IonSlide>
    );
  });
};

export const Movies: FC = (): ReactElement => {
  const slideOpts = {
    initialSlide: 0,
    width: 250,
    centeredSlidesBounds: true,
    slidesOffsetBefore: 5,
    spaceBetween: 10,
    slidesPerView: 1.6,
    speed: 400,
  };
  return (
    <Scroll>
      <Category>TRENDING MOVIES</Category>
      <IonSlides options={slideOpts}>
        {showMovies(ListOfMovies, "trending")}
      </IonSlides>
      <Category>NEW MOVIES</Category>
      <IonSlides options={slideOpts}>
        {showMovies(ListOfMovies, "new")}
      </IonSlides>
    </Scroll>
  );
};
