// import { MouseEvent } from "react";
// import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export default function NavBar() {
  // const history = useHistory();

  // function handleAnchorClick(e: MouseEvent<HTMLAnchorElement>) {
  //   // console.log('clicou');
  //   e.preventDefault();
  //   // console.log(e.currentTarget.href);
  //   // console.log(e.currentTarget.getAttribute('href'));
  //   const newRoute = e.currentTarget.getAttribute('href');
  //   if (newRoute)
  //     history.push(newRoute!);
  // }

  return <nav>
    <ul>
      {/* <li><a onClick={handleAnchorClick} href="/">Home</a></li> */}
      <li><Link to="/">Home</Link></li>
      {/* <li><a onClick={handleAnchorClick} href="/contato">Contato</a></li> */}
      <li><Link to="/contato">Contato</Link></li>
    </ul>
  </nav>
}
