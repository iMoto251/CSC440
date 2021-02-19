import React from 'react';
import logo from './logo.png';
import styled from 'styled-components';
import Navigation from './navbar';
import LinkDisplay from './links';

const Body = styled.body`
  display: grid;
  grid-template-columns: auto 1fr auto;
`;

const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-size: calc(5px + 2vmin);
  color: white;
  padding: 10px 10px;
  width: auto;
`;

const Img = styled.img`
  width: 250px;
  height: 100px;
  align: center;
`;

const B = styled.b`
  background-color: #808080;
  text-align: left;
  padding: 10px 10px;
`;

const A = styled.a`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #FFFFFF;
  padding: 10px;
`;

const Small = styled.div`
  font-size: 12px;
`;


function App() {
  return (
    <Body>
      <Header>
        <Img src={logo}/>
        <div>CSC 440 Final Project</div>
        <div>William Burkes</div>
        <Small>(The buttons work, you just have to click twice)</Small>
        <Navigation/>
      </Header>
      <B>
        Main Content
      </B>
      <A style ={{backgroundColor: "lightgrey"}}><LinkDisplay/></A>
    </Body>
  );
}

export default App;