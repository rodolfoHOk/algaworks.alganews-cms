import styled from "styled-components"
import { User } from "../../@types/User";
// import { AlgaNews } from "../../@types/AlgaNews";
import Profile from "../components/Profile/Profile"

export default function EditorsList() {
  // const editors: AlgaNews.components['schemas']['EditorSummary'][] = [];
  const editors: User.EditorSummary[] = [];

  return <EditorsListWrapper>
    <Profile
      name={'Felipe Hash'}
      description={'criador de conteúdo a 3 anos'}
      avatar={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNf0vAZLggJoZxGKpfOa3EBClHkwQmmvv9Lg&usqp=CAU'}
      editorId={1}
    />
    <Profile
      name={'João Frango'}
      description={'criador de conteúdo a 2 anos'}
      avatar={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNf0vAZLggJoZxGKpfOa3EBClHkwQmmvv9Lg&usqp=CAU'}
      editorId={2}
    />
    <Profile
      name={'Alex Teixeira'}
      description={'criador de conteúdo a 2 anos'}
      avatar={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNf0vAZLggJoZxGKpfOa3EBClHkwQmmvv9Lg&usqp=CAU'}
      editorId={3}
    />
    <Profile
      name={'Camila Vasconcellos'}
      description={'criadora de conteúdo a 6 anos'}
      avatar={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNf0vAZLggJoZxGKpfOa3EBClHkwQmmvv9Lg&usqp=CAU'}
      editorId={4}
    />
    <Profile
      name={'Gabriel Freitas'}
      description={'criador de conteúdo a 2 meses'}
      avatar={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNf0vAZLggJoZxGKpfOa3EBClHkwQmmvv9Lg&usqp=CAU'}
      editorId={5}
    />
  </EditorsListWrapper>
}

const EditorsListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`;
