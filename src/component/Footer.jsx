import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 20px;
  text-align: center;
  background-color: #333;
  color: white;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2025 Khushbu Kumari. All Rights Reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
