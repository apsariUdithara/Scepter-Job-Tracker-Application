import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 1.2rem;
  background: var(--background-secondary-color);
  border-radius: var(--border-radius);

  display: grid;
  @media (min-width: 768px) {
    grid-template-columns: 1fr ;
    column-gap: 1.5rem;
  }
  @media (min-width: 1120px) {
    grid-template-columns: 1fr ;
  }

  margin-top: 4rem;
  text-align: left;
  button {
    text-align: left;
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    color: var(--green-500);
    font-size: 1rem;
    cursor: pointer;
  }

  h4 {
    text-align: left;
    margin-bottom: 0.75rem;
  }
`;

export default Wrapper;

