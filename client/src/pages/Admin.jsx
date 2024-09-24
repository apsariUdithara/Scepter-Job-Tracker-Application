import { FaSuitcaseRolling, FaCalendarCheck } from "react-icons/fa";
import { useLoaderData, redirect } from "react-router-dom";
import customFetch from "../utils/customFetch";
import Wrapper from "../assets/wrappers/StatsContainer";
import { toast } from "react-toastify";
import { StatItem } from "../components";
import { UserDetailsTb } from "../components";

export const loader = async () => {
  try {
    const response = await customFetch.get("/users/admin/app-stats");
    return response.data;
  } catch (error) {
    toast.error("You are not authorized to view this page");
    return redirect("/dashboard");
  }
};
const Admin = () => {
  const { users, jobs, userList } = useLoaderData();
  return (
    <>
      <Wrapper>
        <StatItem
          title="current users"
          count={users}
          color="var(--black)"
          bcg="var(--green-300)"
          bcgcontainer="var(--green-500)"
          icon={<FaSuitcaseRolling />}
        />
        <StatItem
          title="total jobs"
          count={jobs}
          color="var(--black)"
          bcg="var(--primary-3-2)"
          bcgcontainer="var(--primary-3)"
          icon={<FaCalendarCheck />}
        />
      </Wrapper>
      <UserDetailsTb userList={userList} />
    </>
  );
};

export default Admin;
