import React from 'react';
import styled from 'styled-components';
import logo from '../../logo.svg';
import './App.css';

const Div = styled.div`
  text-align: center;
`;
const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
const Image = styled.img`
  height: 40vmin;
  pointer-events: none;
`;
const Link = styled.a`
  color: #61dafb;
`;

const App = () => {
  return (
    <Div >
      <Header>
        <Image src={logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Link
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </Link>
      </Header>
    </Div>
  );
};

export default App;
