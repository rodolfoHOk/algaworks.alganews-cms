import NavBar from '../../components/NavBar';
import * as DL from './Default.layout.styles';
import Logo from '../../components/Logo';
import SessionController from '../../components/SessionController/SessionController';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

function DefaultLayout(props: DefaultLayoutProps) {
  return <DL.Wrapper>
    <DL.Header>
      <Logo />
    </DL.Header>
    <DL.Main>
      <DL.Navigation>
        <NavBar />
      </DL.Navigation>
      <DL.FeaturedContent>
        {props.children}
      </DL.FeaturedContent>
      <DL.Aside>
        <SessionController
          name="Cristiano Moreira Silveira Marques"
          description="editor há 2 anos"
          avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNf0vAZLggJoZxGKpfOa3EBClHkwQmmvv9Lg&usqp=CAU"
        />
      </DL.Aside>
    </DL.Main>
  </DL.Wrapper>
}

export default DefaultLayout;
