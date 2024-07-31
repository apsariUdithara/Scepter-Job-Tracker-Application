import {
  FaBusinessTime,
  FaCalendarCheck,
  FaSuitcaseRolling,
  FaBug,
} from "react-icons/fa";
import Wrapper from "../assets/wrappers/StatsContainer";
import StatItem from "./StatItem";

const StatsContainer = ({ defaultStats }) => {
  const stats = [
    {
      title: "jobs applied",
      count: defaultStats?.appliedJobs || 0,
      icon: <FaBusinessTime />,
      color: "var(--black)",
      bcg: "var(--green-300)",
      bcgcontainer: "var(--green-500)",
    },
    {
      title: "pending applications",
      count: defaultStats?.pending || 0,
      icon: <FaSuitcaseRolling />,
      color: "var(--black)",
      bcg: "var(--primary-3-2)",
      bcgcontainer: "var(--primary-3)",
    },

    {
      title: "interviews scheduled",
      count: defaultStats?.interview || 0,
      icon: <FaCalendarCheck />,
      color: "var(--black)",
      bcg: "var(--primary-4-2)",
      bcgcontainer: "var(--primary-4)",
    },

    {
      title: "jobs declined",
      count: defaultStats?.declined || 0,
      icon: <FaBug />,
      color: "var(--black)",
      bcg: "var(--orange-300)",
      bcgcontainer: "var(--orange-500)",
    },
  ];
  return (
    <Wrapper>
      {stats.map((item) => {
        return <StatItem key={item.title} {...item} />;
      })}
    </Wrapper>
  );
};
export default StatsContainer;
