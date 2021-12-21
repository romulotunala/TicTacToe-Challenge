import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background: #0003;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function OverlayDefault(props) {
  return <Overlay>{props.children}</Overlay>;
}

export default OverlayDefault;
