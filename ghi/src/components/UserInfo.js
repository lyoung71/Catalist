import useToken from "@galvanize-inc/jwtdown-for-react";
import { useEffect, useState } from "react";

const UserInfo = () => {
  const [data, setData] = useState({});
  const { fetchWithToken, token } = useToken();

  useEffect(() => {
    console.log("token", token);
    getData();
  }, []);

  const getData = async () => {
    const userData = await fetchWithToken(
      "http://localhost:3000/users/me/items/"
    );
    setData(userData);
  };

  return <div>username: {data.owner}</div>;
};

export default UserInfo;
