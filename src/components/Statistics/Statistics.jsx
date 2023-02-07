import PropTypes from 'prop-types';
import {
  Card,
  CardLabel,
  CardQuantity,
  CardTitle,
  CardItem,
  CardList,
} from './Statistics.styled.jsx';

export function Statistics({ title, stats }) {
  return (
    <Card>
      {title && <CardTitle>{title}</CardTitle>}

      <CardList>
        {stats.map(stat => (
          <CardItem id={stat.id} key={stat.id}>
            <CardLabel>{stat.label}</CardLabel>
            <CardQuantity>{stat.percentage}%</CardQuantity>
          </CardItem>
        ))}
      </CardList>
    </Card>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
