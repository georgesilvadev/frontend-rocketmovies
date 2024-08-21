import styled from "styled-components";

export const Container = styled.div`
  .content {
    padding: 40px 190px;
  }

  .title {
    display: flex;
    align-items: center;

    margin-top: 24px;

    > h1 {
      padding-right: 19px;
    }
  }

  .rating {
    color: ${({ theme }) => theme.COLORS.PINK};
    display: flex;
    gap: 10px;
  }

  .register {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;

    margin-top: 24px;

    > img {
      width: 16px;
      height: 16px;

      border-radius: 35px;
      border: 1px solid #3e3b47;
    }

    > .date {
      display: flex;
      align-items: center;
      gap: 8px;

      margin-left: 8px;
    }
  }

  .gender {
    display: flex;
    gap: 8px;

    margin-top: 40px;
  };

  .text-resume{
    font-family: "Roboto Slab";
    font-size: 16px;
    margin-top: 40px;
    text-align: justify;
  }
`;
