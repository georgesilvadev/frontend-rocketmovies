import { Container } from "./styles";

export function ButtonText({ children, isActive = false, ...rest }) {
  return (
    <Container type="button" $isactive={isActive.toString()} {...rest}>
      {children}
    </Container>
  );
}
