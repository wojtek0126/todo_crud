import React from "react";
import * as Icon from "react-icons/fi";
import Checkbox from "react-custom-checkbox";
import { Flex } from "theme-ui";


const CheckboxAtom = ({checked, onChange, backgroundColor, color, label, id, display}) => {
  return ( 
      <div sx={{ display: `${display}`}}>
        <Checkbox
                checked={checked}
                onChange={onChange}
                id={id}           
                icon={
                <Flex
                    sx={{             
                    flex: 1,
                    backgroundColor: `${backgroundColor}`,
                    alignSelf: "stretch"                     
                    }}
                >
                    <Icon.FiCheck color={color} size={15} />
                </Flex>
                }
                borderColor="#174A41"
                // borderWidth={0}
                borderRadius={20}
                style={{ overflow: "hidden" }}
                size={15}
                label={label}
            />
      </div>      
  );
};


export default CheckboxAtom;