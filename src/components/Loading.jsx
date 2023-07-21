import React from "react";
import { Container } from "./generals/Container";
import ReactLoading from "react-loading";
import { ActivityIndicator } from "./Login/ActivityIndicator";

const Loading = ({ className }) => {
  return (
    <Container className={className}>
      <ActivityIndicator size={30}/>
    </Container>
  );
};

export { Loading };
