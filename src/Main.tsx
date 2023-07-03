import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getTodos = () => {
  return axios("https://jsonplaceholder.typicode.com/todos/1");
};

const Main = () => {
  const { data } = useQuery({ queryKey: ["todos"], queryFn: getTodos });

  return (
    <div
      css={{
        backgroundColor: "hotpink",
        "&:hover": {
          color: "lightgreen",
        },
      }}
    >
      Main
      <input />
    </div>
  );
};

export default Main;
