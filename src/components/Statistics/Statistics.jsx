export function Statistics(props) {
  return (
    <div className="statistics">
      <h2 className="title">{props.title}</h2>

      <ul className="stat-list">
        {props.stats.map(stat => (
          <li className="item" id={stat.id} key={stat.id}>
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
