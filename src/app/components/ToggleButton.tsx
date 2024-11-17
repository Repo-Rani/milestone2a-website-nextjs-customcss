

import React from "react";
import { ToggleButtonProps } from "../../../types/type";

const ToggleButton = ({ onClick, isOpen }: ToggleButtonProps) => {
  return (
    <button onClick={onClick} className="toggle-btn">
      {isOpen ? (
        <i className="bx bx-x icon-close"></i>
      ) : (
        <i className="bx bx-menu-alt-right icon-menu"></i>
      )}
    </button>
  );
};

export default ToggleButton;
