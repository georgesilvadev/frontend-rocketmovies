import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div``;

export const Brand = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 40px;

  > h1 {
    font-family: "Roboto Slab", sans-serif;
    font-weight: 400;
  }
`;

export const AddFilm = styled(Link)`
  display: flex;
  align-items: center;
  gap: 3px;

  padding: 16px 32px;

  background-color: ${({ theme }) => theme.COLORS.PINK};
  border-radius: 8px;
  color: #1C1B1E;
`;

export const Content = styled.div`
    padding: 40px 190px;
    width: 100%;
`;
