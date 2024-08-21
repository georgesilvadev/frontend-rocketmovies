import { Container, Form, Avatar } from "./styles";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { FiArrowLeft, FiLock, FiMail, FiUser, FiCamera } from "react-icons/fi";

export function Profile() {
  return (
    <Container>
      <header>
        <a href="/">
          <FiArrowLeft />
          <span>Voltar</span>
        </a>
      </header>

      <Form>
        <Avatar>
          <img
            src="https://github.com/georgesilvadev.png"
            alt="Foto do usuário no Github"
          />

          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" />
          </label>
        </Avatar>

        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <Input placeholder="Senha atual" type="password" icon={FiLock} />
        <Input placeholder="Nova senha" type="password" icon={FiLock} />

        <Button title="Salvar" />
      </Form>
    </Container>
  );
}
