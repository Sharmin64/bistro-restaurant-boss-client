import {useContext} from "react";
import {useQuery} from "@tanstack/react-query";
import {AuthContext} from "../Providers/AuthProvider";
const useCart = () => {
  const {user} = useContext(AuthContext);
  const token = localStorage.getItem("access-token");

  const {refetch, data: cart = []} = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5001/carts?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      );
      return res.json();
    },
  });
  return [cart, refetch];
};

export default useCart;

//?xopoy paste here
