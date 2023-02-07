import PropTypes from 'prop-types';
import {
  Card,
  CardAvatar,
  CardHeader,
  CardInfo,
  CardInfoList,
  CardLabel,
  CardLocation,
  CardName,
  CardQuantity,
  CardTag,
} from './Profile.styled.jsx';

export function Profile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <Card>
      <CardHeader>
        <CardAvatar src={avatar} alt={username} />
        <CardName>{username}</CardName>
        <CardTag>{tag}</CardTag>
        <CardLocation>{location}</CardLocation>
      </CardHeader>
      <CardInfo>
        <CardInfoList>
          <CardLabel>Followers</CardLabel>
          <CardQuantity>{followers}</CardQuantity>
        </CardInfoList>
        <CardInfoList>
          <CardLabel>Views</CardLabel>
          <CardQuantity>{views}</CardQuantity>
        </CardInfoList>
        <CardInfoList>
          <CardLabel>Likes</CardLabel>
          <CardQuantity>{likes}</CardQuantity>
        </CardInfoList>
      </CardInfo>
    </Card>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
