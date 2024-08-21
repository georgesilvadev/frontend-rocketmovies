import styled from "styled-components";

export const Container = styled.button`
  background: none;
  border: none;

  color: ${({ theme, $isactive }) => $isactive ? theme.COLORS.PINK : theme.COLORS.GRAY_100};

  display: flex;
  align-items: center;
  gap: 8px;
`;
