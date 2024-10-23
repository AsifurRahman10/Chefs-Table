import React from "react";

export const WantToCookRow = ({ item }) => {
  const { recipe_name, preparing_time, calories } = item;
  return (
    <>
      <tr>
        <th>1</th>
        <td>{recipe_name}</td>
        <td>{preparing_time}</td>
        <td>{calories}</td>
      </tr>
    </>
  );
};
