import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom"

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function CalcView() {
  const params = useParams<{ a: string, b: string }>();
  // const location = useLocation(); // criado hook useQuery()
  const query = useQuery();

  useEffect(() => {
    // console.log(params);
    // console.log(location);
    // console.log(location.search);
    // const query = new URLSearchParams(location.search); // criado hook useQuery()
    // console.log(query);
    console.log(query.get('operation'));
  }, [query]);

  return <div>
    <h1>Soma</h1>
    <h2>{params.a} + {params.b} = {Number(params.a) + Number(params.b)}</h2>
  </div>
}
