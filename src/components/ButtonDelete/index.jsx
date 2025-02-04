import { Container } from "./styles";

export function ButtonDelete({ title, loading }) {
  return (
    <Container type="button" disabled={loading}>
      {loading ? "Carregando..." : title}
    </Container>
  );
}