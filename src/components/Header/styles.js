import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 116px;

  padding: 0 123px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 64px;

  border-bottom: 1px solid #3e3b47;

  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > input {
    width: 630px;
    height: 56px;

    padding: 19px 24px;

    border: none;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
  }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

  > div {
    display: flex;
    flex-direction: column;

    strong {
      font-family: "Roboto Slab";
      font-size: 14px;
    }

    button{
      font-size: 14px;
      text-align: right;
      color: ${({ theme }) => theme.COLORS.GRAY_300};

      background: none;
      border: none;
    }
  }

  > img {
    height: 64px;

    border-radius: 35px;
  }
`;
