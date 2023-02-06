import friends from 'data/friends.json';
import { FriendListItem } from './FriendListItem';

export function FriendList() {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          status={friend.isOnline}
          id={friend.id}
          key={friend.id}
        />
      ))}
    </ul>
  );
}

