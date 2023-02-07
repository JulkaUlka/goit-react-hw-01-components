import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import { CardList } from './FriendList.styled.jsx';

export function FriendList({ friends }) {
  return (
    <CardList>
      {friends.map(friend => (
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          status={friend.isOnline}
          id={friend.id}
          key={friend.id}
        />
      ))}
    </CardList>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf.isRequired,
};
