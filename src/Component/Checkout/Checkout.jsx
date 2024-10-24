import PropTypes from "prop-types";
import WantToCook from "../Wanttocook/WantToCook";
import CurrentlyCooking from "../CurrentlyCooking/CurrentlyCooking";

const Checkout = ({
  addToCook,
  handleCurrentlyCooking,
  sentForCook,
  calculateTotalCount,
  totalTime,
  totalCalories,
}) => {
  return (
    <div className="border-2 rounded-2xl flex-1">
      <WantToCook
        addToCook={addToCook}
        handleCurrentlyCooking={handleCurrentlyCooking}
        calculateTotalCount={calculateTotalCount}
      ></WantToCook>
      <CurrentlyCooking
        totalTime={totalTime}
        sentForCook={sentForCook}
        totalCalories={totalCalories}
      ></CurrentlyCooking>
    </div>
  );
};

Checkout.propTypes = {
  addToCook: PropTypes.object.isRequired,
  handleCurrentlyCooking: PropTypes.func.isRequired,
  sentForCook: PropTypes.object.isRequired,
  calculateTotalCount: PropTypes.func.isRequired,
  totalTime: PropTypes.number.isRequired,
  totalCalories: PropTypes.number.isRequired,
};

export default Checkout;
