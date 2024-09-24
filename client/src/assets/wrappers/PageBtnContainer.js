import styled from "styled-components";

const Wrapper = styled.section`
  height: 4rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: end;
  flex-wrap: wrap;
  gap: 1rem;
  .btn-container {
    background: var(--background-secondary-color);
    border-radius: var(--border-radius);
    display: flex;
  }
  .page-btn {
    background: var(--green-100);
    border-color:  var(--green-400);
    width: 25px;
    height: 20px;
    font-weight: 600;
    font-size: 0.8rem;
    border-radius: var(--border-radius);
    var(--primary-1-700);
    cursor: pointer;
  }

  .active {
    background: var(--white);
  }
  .prev-btn,
  .next-btn {
    background: var(--green-100);
    border-color: var(--green-400);
    border-radius: var(--border-radius);

    width: 70px;
    height: 25px;
    color: var(--primary-1-700);
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
  }
  .prev-btn:hover,
  .next-btn:hover {
    background: var(--white);
    color: var(--primary-1-700);
    transition: var(--transition);
  }
  .dots {
    display: grid;
    place-items: center;
    cursor: text;
  }
`;
export default Wrapper;
