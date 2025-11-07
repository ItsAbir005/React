function UserList({ users }) {
  return <ul>{users.map(u => <li key={u}>{u}</li>)}</ul>;
}

export default UserList;
