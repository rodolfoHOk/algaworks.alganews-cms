import styled from "styled-components"
import Profile from "../components/Profile/Profile"

export default function EditorsList() {
  return <EditorsListWrapper>
    <Profile
      name={'Felipe Hash'}
      description={'criador de conteúdo a 3 anos'}
      avatar={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNf0vAZLggJoZxGKpfOa3EBClHkwQmmvv9Lg&usqp=CAU'}
    />
    <Profile
      name={'João Frango'}
      description={'criador de conteúdo a 2 anos'}
      avatar={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNf0vAZLggJoZxGKpfOa3EBClHkwQmmvv9Lg&usqp=CAU'}
    />
    <Profile
      name={'Alex Teixeira'}
      description={'criador de conteúdo a 2 anos'}
      avatar={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNf0vAZLggJoZxGKpfOa3EBClHkwQmmvv9Lg&usqp=CAU'}
    />
    <Profile
      name={'Camila Vasconcellos'}
      description={'criadora de conteúdo a 6 anos'}
      avatar={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNf0vAZLggJoZxGKpfOa3EBClHkwQmmvv9Lg&usqp=CAU'}
    />
    <Profile
      name={'Gabriel Freitas'}
      description={'criador de conteúdo a 2 meses'}
      avatar={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNf0vAZLggJoZxGKpfOa3EBClHkwQmmvv9Lg&usqp=CAU'}
    />
  </EditorsListWrapper>
}

const EditorsListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`;