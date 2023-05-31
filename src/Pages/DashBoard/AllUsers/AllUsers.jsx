import {useQuery} from "@tanstack/react-query";
import React from "react";
import {Helmet} from "react-helmet-async";
import {FaTrashAlt} from "react-icons/fa";

const AllUsers = () => {
  const {data: users = [], refetch} = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5001/users");
    return res.json();
  });

  const handleDelete = (user) => {
    console.log("buyyon deleted");
  };
  return (
    <div className="w-full">
      <Helmet>
        <title>Bistro Boss | All Users</title>
      </Helmet>
      <h3 className="text-3xl font-semibold my-4">
        Total Users:{users.length}
      </h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>Blue</td>
                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-ghost btn-lg bg-emerald-500 text-white"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
