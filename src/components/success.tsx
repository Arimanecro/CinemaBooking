import React, { ReactElement, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

type Redirect = {
  redirect: Function;
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #5cb885;
  color: white;
  font-size: 26px;
  position: absolute;
  z-index: 30;
  top: 0;
`;

export default (props: Redirect): ReactElement => {
  const history = useHistory();
  useEffect(() => {
    localStorage.removeItem("ticket");
    setTimeout(() => {
      history.push("/");
      props.redirect("empty");
    }, 2000);
  }, []);
  return (
    <Wrapper>
      <h1>Your payment was successful.</h1>
    </Wrapper>
  );
};
