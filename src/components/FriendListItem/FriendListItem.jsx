import PropTypes from 'prop-types';
import {
  CardStatus,
  CardName,
  CardItem,
  CardAvatar,
} from './FriendListItem.styled.jsx';


export function FriendListItem({ avatar, name, status, id }) {
  return (
    <CardItem id={id}>
      <CardStatus status={status} />
      <CardAvatar src={avatar} alt="User avatar" width="48" />
      <CardName>{name}</CardName>
    </CardItem>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
