/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

// Components
import ModalEndGame from "../templates/Modal_EndGame";
import Square from "../molecules/Square";

// Assets
import iconWin from "../../assets/icon_win.png";
import iconLose from "../../assets/icon_lose.png";

const Container = styled.div`
  width: 656px;
  height: 656px;
  border: 4px #fff dashed;
  border-radius: 10px;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const VirtualBoard = styled.div`
  width: 632px;
  height: 632px;
  border-radius: 10px;
  background: #47a3f8;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
`;
function Board({ playing, setPlaying, changeBoard, newPlay }) {
  const { board, player } = useParams();
  const [textEndGame, setTextEndGame] = useState("");
  const [iconEndGame, setIconEndGame] = useState(null);

  useEffect(() => {
    plays() && endGame();
  }, [board]);

  useEffect(() => {
    if (player === "2" && playing === true) {
      setTimeout(() => {
        cpuPlay();
      }, 250);
    }
  }, [player]);

  const plays = () => {
    return board?.split("");
  };

  const toPlay = (position) => {
    let simbol = player === "1" ? "O" : "X";
    let value = plays();
    value.splice(position, 1, simbol);
    let changePlayer = player === "1" ? "2" : "1";
    changeBoard(value.toString().replace(/,/g, ""), changePlayer);
  };

  const cpuPlay = () => {
    let position;
    let i = 0;
    if (plays().some((i) => i === " ")) {
      do {
        position = Math.round(Math.random() * 8);
        i++;
      } while (plays()[position] !== " ");
      toPlay(position);
    } else {
      return;
    }
  };

  const endGame = () => {
    if (
      (plays()[0] !== " " &&
        plays()[1] !== " " &&
        plays()[2] !== " " &&
        plays()[0] === plays()[1] &&
        plays()[1] === plays()[2] &&
        plays()[2] === "O") ||
      (plays()[3] !== " " &&
        plays()[4] !== " " &&
        plays()[5] !== " " &&
        plays()[3] === plays()[4] &&
        plays()[4] === plays()[5] &&
        plays()[5] === "O") ||
      (plays()[6] !== " " &&
        plays()[7] !== " " &&
        plays()[8] !== " " &&
        plays()[6] === plays()[7] &&
        plays()[7] === plays()[8] &&
        plays()[8] === "O") ||
      (plays()[0] !== " " &&
        plays()[3] !== " " &&
        plays()[6] !== " " &&
        plays()[0] === plays()[3] &&
        plays()[3] === plays()[6] &&
        plays()[6] === "O") ||
      (plays()[1] !== " " &&
        plays()[4] !== " " &&
        plays()[7] !== " " &&
        plays()[1] === plays()[4] &&
        plays()[4] === plays()[7] &&
        plays()[7] === "O") ||
      (plays()[2] !== " " &&
        plays()[5] !== " " &&
        plays()[8] !== " " &&
        plays()[2] === plays()[5] &&
        plays()[5] === plays()[8] &&
        plays()[8] === "O") ||
      (plays()[0] !== " " &&
        plays()[4] !== " " &&
        plays()[8] !== " " &&
        plays()[0] === plays()[4] &&
        plays()[4] === plays()[8] &&
        plays()[8] === "O") ||
      (plays()[2] !== " " &&
        plays()[4] !== " " &&
        plays()[6] !== " " &&
        plays()[2] === plays()[4] &&
        plays()[4] === plays()[6] &&
        plays()[6] === "O")
    ) {
      setTextEndGame("Você ganhou! Parabéns campeão.");
      setIconEndGame(iconWin);
      setPlaying(false);
    } else if (
      (plays()[0] !== " " &&
        plays()[1] !== " " &&
        plays()[2] !== " " &&
        plays()[0] === plays()[1] &&
        plays()[1] === plays()[2] &&
        plays()[2] === "X") ||
      (plays()[3] !== " " &&
        plays()[4] !== " " &&
        plays()[5] !== " " &&
        plays()[3] === plays()[4] &&
        plays()[4] === plays()[5] &&
        plays()[5] === "X") ||
      (plays()[6] !== " " &&
        plays()[7] !== " " &&
        plays()[8] !== " " &&
        plays()[6] === plays()[7] &&
        plays()[7] === plays()[8] &&
        plays()[8] === "X") ||
      (plays()[0] !== " " &&
        plays()[3] !== " " &&
        plays()[6] !== " " &&
        plays()[0] === plays()[3] &&
        plays()[3] === plays()[6] &&
        plays()[6] === "X") ||
      (plays()[1] !== " " &&
        plays()[4] !== " " &&
        plays()[7] !== " " &&
        plays()[1] === plays()[4] &&
        plays()[4] === plays()[7] &&
        plays()[7] === "X") ||
      (plays()[2] !== " " &&
        plays()[5] !== " " &&
        plays()[8] !== " " &&
        plays()[2] === plays()[5] &&
        plays()[5] === plays()[8] &&
        plays()[8] === "X") ||
      (plays()[0] !== " " &&
        plays()[4] !== " " &&
        plays()[8] !== " " &&
        plays()[0] === plays()[4] &&
        plays()[4] === plays()[8] &&
        plays()[8] === "X") ||
      (plays()[2] !== " " &&
        plays()[4] !== " " &&
        plays()[6] !== " " &&
        plays()[2] === plays()[4] &&
        plays()[4] === plays()[6] &&
        plays()[6] === "X")
    ) {
      setPlaying(false);
      setTextEndGame("Você perdeu! Tente novamente.");
      setIconEndGame(iconLose);
    } else if (plays().every((i) => i !== " ")) {
      setPlaying(false);
      setTextEndGame("Empatou... Tente novamente.");
    }
  };

  const renderSquares = () => {
    return plays()?.map((value, index) => {
      return <Square key={index} move={value} index={index} onClick={() => toPlay(index)} />;
    });
  };
  return (
    <>
      <Container>
        <VirtualBoard>{renderSquares()}</VirtualBoard>
      </Container>
      {!playing && (
        <ModalEndGame
          info={textEndGame}
          icon={iconEndGame}
          newPlay={() => {
            newPlay();
            setIconEndGame(null);
          }}
        />
      )}
    </>
  );
};

export default Board;
