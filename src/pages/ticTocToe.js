import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

// Components
import Board from "../components/organisms/Board";

// Assets
import bg_desktop from "../assets/bg_desktop.png";
import logo from "../assets/logo.svg";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #47a3f8 url(${bg_desktop}) no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const LogoPlay = styled.img`
  width: 15%;
  position: absolute;
  top: 50px;
  left: 50px;

  @media (max-width: 480px) {
    display: none;
  }
`;

const LogoPlayMobile = styled.h1`
  display: none;

  @media (max-width: 480px) {
    display: block;
    width: fit-content;
    max-width: 70%;
    padding: 8px;
    border-radius: 10px;
    border: 2px #fff dashed;
    font-family: "Rock Salt", cursive;
    font-size: 48px;
    color: #fff;
    text-align: center;
    line-height: 72px;
  }
`;

const CurrentPlayer = styled.p`
  font-family: "Rock Salt", cursive;
  font-size: 48px;
`;

function TicTocToe() {
  const navigate = useNavigate();
  const { player } = useParams();
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    newPlay();
  }, []);

  const changeBoard = (moves, newPlayer) => {
    const encodeMoves = encodeURI(moves);
    navigate(`/${encodeMoves}/${newPlayer}`);
  };
  const newPlay = () => {
    changeBoard("         ", 1);
    setPlaying(true);
  };

  return (
    <Container>
      <LogoPlay src={logo} />
      <LogoPlayMobile>Jogo da Velha</LogoPlayMobile>
      <CurrentPlayer>Joador : {player === "1" ? "O" : "X"}</CurrentPlayer>
      <Board player={player} playing={playing} setPlaying={setPlaying} changeBoard={changeBoard} newPlay={newPlay} />
    </Container>
  );
}

export default TicTocToe;
