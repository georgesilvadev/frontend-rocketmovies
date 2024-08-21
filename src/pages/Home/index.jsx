import { Container, Content, Brand, AddFilm } from "./styles";

import { FiPlus } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Note } from "../../components/Note";

export function Home() {
  return (
    <Container>
      <Header />

      <Content>
        <Brand>
          <h1>Meus Filmes</h1>
          <AddFilm to="/new">
            <FiPlus />
            Adicionar filme
          </AddFilm>
        </Brand>

        <Note
          data={{
            title: "Interestellar",
            text: "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...",
            tags: [
              { id: "1", name: "Ficção Cientifica" },
              { id: "2", name: "Drama" },
            ],
          }}
        />

        <Note
          data={{
            title: "Interestellar",
            text: "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...",
            tags: [
              { id: "1", name: "Ficção Cientifica" },
              { id: "2", name: "Drama" },
            ],
          }}
        />

        <Note
          data={{
            title: "Interestellar",
            text: "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...",
            tags: [
              { id: "1", name: "Ficção Cientifica" },
              { id: "2", name: "Drama" },
            ],
          }}
        />
      </Content>
    </Container>
  );
}
