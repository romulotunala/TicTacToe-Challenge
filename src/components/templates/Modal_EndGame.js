import React from "react";
import styled from "styled-components";

// Components
import ModalDefault from "../organisms/ModalDefault";

// Assets
import gameOver from "../../assets/game-over.png";

const Content = styled.div`
  width: 100%;
  min-height: 200px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.img`
  width: 104px;
`;

const TextInfo = styled.h2`
  margin: 16px;
  font-family: "Roboto", sans-serif;
  font-size: 32px;
  text-align: center;
`;

const Btn = styled.button`
  width: 50%;
  padding: 8px;
  border-radius: 5px;
  border: 2px #000 solid;
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  background: linear-gradient(90deg, #47a3f8 0%, #a8d5fe 46.7%, #a8d5fe 61.98%, #47a3f8 100%);
  background: #a8d5fe;
`;

function ModalEndGame({ info, newPlay, icon }) {
  return (
    <ModalDefault>
      <Content>
        <Icon src={icon || gameOver} />
        <TextInfo>{info}</TextInfo>
        <Btn type="button" onClick={newPlay}>
          Novo jogo
        </Btn>
      </Content>
    </ModalDefault>
  );
}

export default ModalEndGame;
