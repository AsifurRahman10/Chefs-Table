import PropTypes from "prop-types";

export const WantToCookRow = ({
  item,
  index,
  handleCurrentlyCooking,
  calculateTotalCount,
}) => {
  const { recipe_name, preparing_time, calories } = item;
  return (
    <>
      <tr>
        <th>{index}</th>
        <td>{recipe_name}</td>
        <td>{preparing_time}</td>
        <td>{calories}</td>
        <td>
          <button
            onClick={() => {
              calculateTotalCount(preparing_time, calories);
              handleCurrentlyCooking(item);
            }}
            className="btn bg-[#0BE58A] rounded-full"
          >
            Preparing
          </button>
        </td>
      </tr>
    </>
  );
};

WantToCookRow.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  handleCurrentlyCooking: PropTypes.func.isRequired,
  calculateTotalCount: PropTypes.func.isRequired,
};
