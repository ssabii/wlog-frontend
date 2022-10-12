import React from "react";
import styled from "styled-components";

export interface CardProps {
  children?: React.ReactNode;
}

const Card = ({ children }: CardProps) => <StyledCard>{children}</StyledCard>;

export default Card;

const StyledCard = styled(Card)`
  width: 400px;
  padding: 16px;

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;
