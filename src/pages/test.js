import React, {useState} from 'react';
import styled, {css} from "styled-components"

const Styled = styled.div`
  p {
    color: blue;
  }
`;


const State = () => {
  //const [count, setCount] = useState(0);
  const[isOpen, setOpen] = useState(false);
  const menuOpen = () => setOpen(!isOpen);
  return (
    <div>
      {/* <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button> */}
      <button onClick={menuOpen}>Click</button>

      <Styled isOpen={isOpen}>
        <p>frwrfwrfrw</p>
      </Styled>
    </div>
  );
};

export default State;