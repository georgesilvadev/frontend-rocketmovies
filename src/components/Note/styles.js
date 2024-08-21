import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};

  border: none;
  border-radius: 10px;

  padding: 3%;
  margin-bottom: 24px;

  > main {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;

    h1 {
      font-weight: 700;
      font-size: 24px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    .rating {
      display: flex;
      gap: 6px;
      color: ${({ theme }) => theme.COLORS.PINK};
    }

    p {
      margin-top: 15px;
      text-align: justify;
      font-family: Roboto;

      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  > footer {
    width: 100%;
    margin-top: 24px;

    display: flex;
    flex-direction: row;
    gap: 8px;

    > span {
      width: fit-content;
      align-items: flex-start;

      font-family: Roboto;
      font-size: 13px;

      padding: 5px 16px;

      color: ${({ theme }) => theme.COLORS.WHITE};
      border-radius: 8px;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
    }
  }
`;
