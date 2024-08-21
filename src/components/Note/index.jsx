import { Container } from "./styles";
import { FaStar, FaRegStar } from "react-icons/fa";

export function Note({ data, ...rest }) {
  return (
    <Container {...rest}>
      <main>
        <h1>{data.title}</h1>

        <div class="rating">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStar />
        </div>

        <p>{data.text}</p>
      </main>

      {data.tags && (
        <footer>
          {console.log(data)}
          {data.tags.map((tag) => (
            <span key={tag.id}>{tag.name}</span>
          ))}
        </footer>
      )}
    </Container>
  );
}
