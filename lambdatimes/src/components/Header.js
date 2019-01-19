import React from 'react';
import styled from 'styled-components';


// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Headers = styled.div` 
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid #D3D3D3;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;
`;
// @media (min-width: 1280px) {
//   .header {
//     width: 1280px;
//   }
// }
const H1 = styled.h1`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  // padding-left: -90px;
  color: #000;
`;

const Span = styled.div` {
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
`;
const Date = styled.div`
  margin-left: 25px;
  flex: 1;
`;
const Temp = styled.div` 
  text-align: right;
  margin-right: 25px;
  flex: 1;
`;
const Header = () => {
  return (
    <Headers>
      <Span>
        <Date>
      <span className="date">SMARCH 32, 2018</span>
      </Date>
      </Span>
      <H1>Lambda Times</H1>
      <Span>
      <Temp>
      <span className="temp">98°</span>
      </Temp>
      </Span>
      </Headers>
  )
}

export default Header