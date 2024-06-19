import styled from "styled-components";

const Wrapper = styled.aside`
  display: none;
  @media (min-width: 992px) {
    display: block;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
    .sidebar-container {
      background: var(--BigSidebarbg-color);
      min-height: 100vh;
      height: 100%;
      width: 225px;
      margin-left: -225px;
      transition: margin-left 0.3s ease-in-out;
    }
    .content {
      position: sticky;
      top: 20px;
    }
    .show-sidebar {
      margin-left: 0;
    }
    header {
      height: 6rem;
      display: flex;
      align-items: center;
      padding-left: 1.8rem;
    }
    .nav-links {
      padding-top: 2rem;
      display: flex;

      flex-direction: column;
    }
    .nav-link {
      display: flex;
      align-items: center;
      color: var(--bignavlinktext-color);
      padding: 1rem 0;
      // font-size: 0.975rem;
      font-size: var(--small-text);
      padding-left: 2.7rem;
      text-transform: capitalize;
      transition: padding-left 0.3s ease-in-out;
    }
    .nav-link:hover {
      padding-left: 3.8rem;
      color: var(--soapgreen-400);
      transition: var(--transition);
    }
    .icon {
      font-size: 1.5rem;
      margin-right: 1rem;
      display: grid;
      place-items: center;
    }
    .active {
      color: var(--soapgreen-500);
    }
    .pending {
      background: var(--primary-1-600);
      // color: var(--grey-300);
    }
  }
`;
export default Wrapper;
