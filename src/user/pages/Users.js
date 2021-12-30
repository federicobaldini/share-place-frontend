import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u00001",
      name: "Federico Baldini",
      image:
        "https://images.pexels.com/photos/10430890/pexels-photo-10430890.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      places: 7,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
