// import { useRecoilValue } from "recoil";

// import { usersAtom } from "./atoms";

// const Users = () => {
//   const users = useRecoilValue(usersAtom);

//   return (
//     <div>
//       <h2>Users</h2>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>
//             {user.name} ({user.email})
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Users;

import { useRecoilValue } from "recoil";
import { useRecoilValueLoadable } from "recoil";
import { usersAtom } from "./atoms";

const Users = () => {
  const users = useRecoilValueLoadable(usersAtom);

  switch (users.state) {
    case "loading":
      return <div>Loading... </div>;
    case "hasError":
      return <div>Error!</div>;
    default:
      console.log(users);
      return (
        <div>
          <h2>Users</h2>
          <ul>
            {users.contents.map((user) => (
              <li key={user.id}>
                {user.name} ({user.email})
              </li>
            ))}
          </ul>
        </div>
      );
  }
};

export default Users;
