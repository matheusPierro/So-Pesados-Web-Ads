import styled from 'styled-components';

export const Container = styled.footer`
  background-color: #f2f2f2;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  div {
    text-align: center;
  }

  h3 {
    color: #333;
  }

  a {
    color: #555;
    text-decoration: none;
    margin-right: 10px;

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    margin: 5px 0;
    color: #777;
  }
`;
