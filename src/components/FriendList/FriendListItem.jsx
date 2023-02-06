export function FriendListItem({ avatar, name, status, id }) {
  return (
    <li className="item" id={id}>
      <span className="status">{status ? 'green' : 'red'}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}
