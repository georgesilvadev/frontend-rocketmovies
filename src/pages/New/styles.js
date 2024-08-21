import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;

    padding: 16px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border-radius: 8px;
  }

  .button-note {
    display: flex;
    gap: 40px;
  }
`;

export const HeaderNew = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  padding-left: 190px;
  margin-top: 40px;

  > a {
    color: ${({ theme }) => theme.COLORS.PINK};

    span {
      padding-left: 8px;
    }
  }
`;

export const Form = styled.form`
  padding: 40px 190px;

  > fieldset {
    border: none;

    display: flex;
    justify-content: space-between;

    margin-bottom: 40px;

    > input {
      width: 536px;
      padding: 18px 16px;

      display: flex;
      gap: 8px;

      border: none;
      border-radius: 10px;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }

  > textarea {
    width: 100%;
    height: 274px;

    padding: 19px 16px;

    color: ${({ theme }) => theme.COLORS.WHITE};

    border: none;
    resize: none;
    border-radius: 10px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
  }
`;
