import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

//Assets
import icon_playO from "../../assets/icon_playO.svg";
import icon_playX from "../../assets/icon_playX.svg";

const Item = styled.button`
  width: 31%;
  height: 31%;
  background: none;
  border: none;
  cursor: pointer;
  color: black;
  position: relative;

  &:disabled {
    cursor: default;
    color: initial;
  }

  border-top-left-radius: ${(props) => props.position === 0 && "10px"};
  border-top-right-radius: ${(props) => props.position === 2 && "10px"};
  border-bottom-left-radius: ${(props) => props.position === 6 && "10px"};
  border-bottom-right-radius: ${(props) => props.position === 8 && "10px"};
  border: 0 #fff dashed;
  border-bottom-width: ${(props) => (props.position === 0 || props.position === 1 || props.position === 2) && "2px"};
  border-right-width: ${(props) => (props.position === 0 || props.position === 3 || props.position === 6) && "2px"};
  border-left-width: ${(props) => (props.position === 2 || props.position === 5 || props.position === 8) && "2px"};
  border-top-width: ${(props) => (props.position === 6 || props.position === 7 || props.position === 8) && "2px"};
`;

const Icon = styled.img`
  width: 104px;

  @media (max-width: 480px) {
    width: 48px;
  }
`;
function Square(props) {
  const { player } = useParams();
  return (
    <Item onClick={props.onClick} position={props.index} disabled={props.move !== " " || player === "2"}>
      {props.move === "O" && <Icon src={icon_playO} />}
      {props.move === "X" && <Icon src={icon_playX} />}
    </Item>
  );
}

export default Square;
