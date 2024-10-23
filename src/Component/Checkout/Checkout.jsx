import PropTypes from "prop-types";
import WantToCook from "../Wanttocook/WantToCook";
import CurrentlyCooking from "../CurrentlyCooking/CurrentlyCooking";

const Checkout = ({ addToCook }) => {
  return (
    <div className="border-2 rounded-2xl flex-1">
      <WantToCook addToCook={addToCook}></WantToCook>
      <CurrentlyCooking></CurrentlyCooking>
    </div>
  );
};

Checkout.propTypes = {
  addToCook: PropTypes.object.isRequired,
};

export default Checkout;
