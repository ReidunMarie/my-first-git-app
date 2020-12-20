import React, { useState } from "react";
import styled from "styled-components";
import { rgba } from "polished";

const height = 1;
const animationTime = "0.35s";
const color = "var(--berry)";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
`;
const DotContainer = styled.div`
  display: flex;
  flex-direction: row;
  z-index: 100;
`;
const Dot = styled.div`
  height: ${height}rem;
  width: ${height/2}rem;
  background: ${color};
  opacity: ${({ clicked }) => clicked ? 1 : 0.7};
`;
const DotLeft = styled(Dot)`
  border-top-left-radius: ${height}rem;
  border-bottom-left-radius: ${height}rem;
`;
const DotRight = styled(Dot)`
  border-top-right-radius: ${height}rem;
  border-bottom-right-radius: ${height}rem;
`;

const DotStretch = styled.div`
  background: ${color};
  opacity: ${({ clicked }) => clicked ? 1 : 0.7};
  width: ${({ clicked }) => (clicked ? `${height*1.5}rem` : 0)};
  transition: width ${animationTime} cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;

const Dots = () => {
  const [clicked, setClicked] = useState(1);
  const dots = [1,2,3];

  return (
    <Row>
    {dots.map((dot, index) => (
        <DotContainer style={{ paddingRight: index < dots.length ? "1rem" : 0 }} onClick={() => setClicked(index)}>
          <DotLeft clicked={clicked === index} />
          <DotStretch clicked={clicked === index} />
          <DotRight clicked={clicked === index} />
        </DotContainer>
    ))}
    </Row>
  )
}

export default Dots;
