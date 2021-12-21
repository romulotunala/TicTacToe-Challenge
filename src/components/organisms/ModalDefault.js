import React from "react";
import styled from "styled-components";

import Overlay from "../atoms/Overlay";

const Container = styled.div`
  width: 400px;
  min-height: 300px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 2px 2px 16px #0008;

  @media (max-width: 480px) {
    width: 90%;
  }
`;

function ModalDefault(props) {
  return (
    <Overlay>
      <Container>{props.children}</Container>
    </Overlay>
  );
}

export default ModalDefault;
