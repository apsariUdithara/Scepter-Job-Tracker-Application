import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracker </span>App
          </h1>
          <p>
            Welcome to Scepter, your ultimate job tracking web application
            designed to streamline your career management. With Scepter, you can
            effortlessly organize job applications, track progress, set
            reminders, and achieve your career goals. Stay on top of every
            opportunity with our user-friendly interface and powerful features.
            Let Scepter be your guide in navigating the path to your dream job.
          </p>
          <Link to="/register" className="btn1 register-link">
            Register
          </Link>
          <Link to="/login" className="btn1 ">
            Login/Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};
export default Landing;
