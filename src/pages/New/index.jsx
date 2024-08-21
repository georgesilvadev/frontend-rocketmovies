import { Container, HeaderNew, Form } from "./styles";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ButtonDelete } from "../../components/ButtonDelete";
import { Section } from "../../components/Section";
import { NoteItem } from "../../components/NoteItem";

import { FiArrowLeft } from "react-icons/fi";
import { useState } from "react";

export function New() {
  const [description, setDescription] = useState("");

  return (
    <Container>
      <Header />

      <main>
        <HeaderNew>
          <a href="/">
            <FiArrowLeft />
            <span>Voltar</span>
          </a>

          <h1>Novo filme</h1>
        </HeaderNew>

        <Form>
          <fieldset>
            <input placeholder="Título" />
            <input placeholder="Sua nota (de 0 a 5)" />
          </fieldset>

          <textarea
            name="observation"
            placeholder="Observações"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="React" />
              <NoteItem isNew />
            </div>
          </Section>

          <div className="button-note">
            <ButtonDelete title="Excluir" />
            <Button title="Salvar" />
          </div>
        </Form>
      </main>
    </Container>
  );
}
