import { Container, Profile } from "./styles";

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>

      <input placeholder="Pesquisar pelo título" />

      <Profile>
        <div>
          <strong>
            Gabriel George
          </strong>
          <button>
            sair
          </button>
        </div>

        <img src="https://github.com/georgesilvadev.png" alt="" />
      </Profile>
    </Container>
  );
}
