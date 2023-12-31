import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import Icon from './assets/img/test.png';
import Ic from './assets/img/test_ic.svg';
import styled from 'styled-components';

const getTodos = () => {
  return axios('https://jsonplaceholder.typicode.com/todos/1');
};

const Main = () => {
  const {data} = useQuery({queryKey: ['todos'], queryFn: getTodos});
  console.log(data);

  return (
    <div
      css={{
        backgroundColor: 'hotpink',
        '&:hover': {
          color: 'lightgreen',
        },
      }}>
      <TTT2 isSelected={true}>2</TTT2>
      <img src={Ic} alt="test" />
      {/* <Ic /> */}
      <input />
    </div>
  );
};

export default Main;

const TTT = styled.div`
  background-color: red;
`;

const TTT2 = styled.div<{
  isSelected: boolean;
}>`
  background-color: red;
`;

const S = {
  TTT,
};
