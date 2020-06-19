import React, { ReactElement, useState } from "react";
import styled from "styled-components";
import popcorn from "../../src/assets/img/popcorn.png";

type popcornProps = { opacity: number };

const WrapperPopCorn = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
`;

const PopCorn = styled.div`
  width: 30px;
  height: 30px;
  background: url(${popcorn}) no-repeat;
  background-size: contain;
  opacity: ${(props: popcornProps) => props.opacity};
`;

export default (): ReactElement => {
  const [rating, setRating] = useState<number>(-1);
  const popCorn: number[] = Array.from(Array(5).keys());

  return (
    <WrapperPopCorn>
      {popCorn.map((v, k) => {
        return (
          <PopCorn
            key={k}
            opacity={k <= rating ? 1 : 0.5}
            onClick={() => setRating(k)}
          />
        );
      })}
    </WrapperPopCorn>
  );
};
