import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: linear-gradient(45deg, #ff6b6b, #ff9f43);
  padding: 20px;
  text-align: center;
  color: white;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Khushbu Kumari</h1>
      <p>Full Stack Developer | Java, JavaScript, React</p>
    </HeaderContainer>
  );
};

export default Header;
