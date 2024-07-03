import React from "react";
import Wrapper from "../assets/wrappers/UserDetailsTb";

const UserDetailsTb = ({ userList }) => {
  return (
    <Wrapper>
      <h4>Registered Users</h4>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Location</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{`${user.name} ${user.lastName}`}</td>
              <td>{user.location}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Wrapper>
  );
};

export default UserDetailsTb;
