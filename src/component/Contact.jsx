import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  padding: 40px;
  background-color: #fff;
  text-align: center;
`;

const Contact = () => {
  return (
    <ContactContainer>
      <h2>Contact Me</h2>
      <p>If you'd like to get in touch, feel free to reach out!</p>
      <a href="khushbkm358@gmail.com">Email Me</a>
    </ContactContainer>
  );
};

export default Contact;
