import styled from "styled-components";

const Wrapper = styled.section`
  margin-top: 4rem;
  h4 {
    text-transform: none;
    padding: 10px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th,
  td {
    text-align: left;
    padding: 12px;
    border-bottom: 1px solid #ddd;
  }
  th {
    background-color: var(--primary-3);
    color: white;
  }
  tr:hover {
    background-color: #f5f5f5;
  }
`;

export default Wrapper;
