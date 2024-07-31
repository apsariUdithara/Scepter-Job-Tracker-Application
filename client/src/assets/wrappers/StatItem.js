import styled from "styled-components";

const Wrapper = styled.article`
  padding: 1.2rem;
  background: ${(props) => props.bcgcontainer};
  border-radius: var(--border-radius);

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .count {
    display: block;
    font-weight: 600;
    font-size: 50px;
    color: ${(props) => props.color};
    line-height: 1.7;
  }
  .title {
    margin: 0;
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    font-weight: 600;
    text-align: left;
    margin-top: 0.3rem;
    font-size: 1.1rem;
    color: var(--black);
  }
  .icon {
    width: 63px;
    height: 55px;
    background: ${(props) => props.bcg};
    border-radius: var(--border-radius);
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 2rem;
      color: ${(props) => props.color};
    }
  }
`;

export default Wrapper;
