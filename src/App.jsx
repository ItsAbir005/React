import withLoader from "./withLoader";
import UserList from "./UserList";

const UserListWithLoader = withLoader(UserList);

export default function App() {
  return (
    <UserListWithLoader isLoading={false} users={["Abir", "John"]} />
  );
}
