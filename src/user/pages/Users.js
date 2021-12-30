import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u00001",
      name: "Federico Baldini",
      image:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
      places: 7,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
