import styled from "styled-components";
import backgroundImg from "../../assets/background.png"

export const Container = styled.div`
  height: 100vh;
  display: flex;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 136px;

  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK};

    font-size: 48px;
    font-weight: 700;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    font-size: 14px;
    width: 100%;
  }

  > h2 {
    font-size: 24px;
    font-weight: 500;

    margin: 48px 0;
  }

  > input {
    width: 340px;

    padding: 18px 16px;
    margin-bottom: 8px;

    border: none;
    border-radius: 10px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
  }

  > input:last-child {
    margin-bottom: 0;
  }

  > a{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    margin-top: 42px;

    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`