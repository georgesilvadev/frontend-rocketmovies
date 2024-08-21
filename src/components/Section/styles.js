import styled from 'styled-components'

export const Container = styled.section`
  margin: 28px 0;

  > h2 {
    margin-bottom: 24px;

    color: ${({ theme}) => theme.COLORS.GRAY};
    font-size: 20px;
  }
`