import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  .logout-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
  }
  .img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
  .dropdown {
    position: absolute;
    top: 45px;
    left: 0;
    width: 100%;
    box-shadow: var(--shadow-2);
    text-align: center;
    visibility: hidden;
    border-radius: var(--border-radius);
    background: var(--green-500);
  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    border-radius: var(--border-radius);
    padding: 0.5rem;
    background: var(--orange-400);
    border-color: transparent;
    color: var(--grey-900);
    letter-spacing: var(--letter-spacing);
    text-transform: capitalize;
    cursor: pointer;
    font-weight: bold;
    width: 100%;
    height: 100%;
  }
  .dropdown-btn:hover {
    background: var(--orange-500);
    box-shadow: var(--shadow-4);
  }
`;

export default Wrapper;
