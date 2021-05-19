import React from "react";
import * as Icon from "react-icons/fi";
import Checkbox from "react-custom-checkbox";

const CheckboxAtom = ({checked, onChange, backgroundColor, color, label}) => {
  return (   
      <Checkbox
        checked={checked}
        onChange={onChange}
        icon={
          <div
            sx={{
              display: "flex",
              flex: 1,
              backgroundColor: `${backgroundColor}`,
              alignSelf: "stretch",
            }}
          >
            <Icon.FiCheck color={color} size={20} />
          </div>
        }
        borderColor="#174A41"
        // borderWidth={0}
        borderRadius={20}
        style={{ overflow: "hidden" }}
        size={20}
        label={label}
      />
    
  );
};

export default CheckboxAtom;