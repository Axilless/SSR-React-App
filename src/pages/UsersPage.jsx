import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { MainLayout, MetaTags } from "components/layouts";
import { UsersList, UsersControls } from "components/pageParts";

export const UsersPage = () => {
  const { users } = useLoaderData();

  const [sortingOrder, setSortingOrder] = useState("asc");

  const changeSortingOrder = () => {
    setSortingOrder((order) => (order === "asc" ? "desc" : "asc"));
  };

  const searchOptions = users.map((user) => ({
    name: user.username,
    value: user.username,
  }));

  return (
    <>
      <MetaTags
        title="Users Page"
        description="The main page with a list of users"
        keywords={["Users", "Users List", "Main Page", "Page with search"]}
      />
      <MainLayout
        title="Users"
        controls={
          <UsersControls
            searchOptions={searchOptions}
            sortingOrder={sortingOrder}
            changeSortingOrder={changeSortingOrder}
          />
        }
      >
        {users && <UsersList users={users} sortingOrder={sortingOrder} />}
      </MainLayout>
    </>
  );
};
