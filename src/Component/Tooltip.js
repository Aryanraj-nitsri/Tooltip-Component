import React  from "react";
import styled from "styled-components";
const Tool = styled.div`
  width: 12%;
  background-color: black;
  position: absolute;
  color: white;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  z-index: 1;
  visibility: hidden;

  top: ${({ top }) => top};
  left: ${({ left }) => left};
  &::before {
    content: "";
    position: absolute;
    width: 0;
    border-top: 10px solid transparent;
    border-left: 10px solid transparent;
    border-right: 10px solid black;
    border-bottom: 10px solid transparent;
    top: 35%;
    left: -9%;
  }
`;
const Wrapper = styled.div`
  &:hover div {
    visibility: visible;
  }
`;

export default function Tooltip({ children, message, top, left, style }) {

  return (
    <Wrapper style={style}>
      {children}
      <Tool top={top} left={left}>
        {message}
      </Tool>
    </Wrapper>
  );
}
