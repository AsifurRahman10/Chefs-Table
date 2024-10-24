import PropTypes from "prop-types";

const CurrentlyCookingRow = ({ item, index }) => {
  const { recipe_name, preparing_time, calories } = item;
  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>{recipe_name}</td>
        <td>{preparing_time}</td>
        <td>{calories}</td>
      </tr>
    </>
  );
};

CurrentlyCookingRow.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default CurrentlyCookingRow;
