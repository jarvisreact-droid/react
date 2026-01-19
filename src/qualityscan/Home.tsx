import { useEffect, useState } from "react";
import { getUsers, type Users } from "./api/qualityscanapi";

function Home() {
  const [users, setUsers] = useState<Users[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <>
      <div>
        <h1>Home Page</h1>
        <div>
          {users.map((user, index) => (
            <div key={index}>
              <p>Name: {user.userName}</p>
              <p>Contact: {user.contactNummber}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
