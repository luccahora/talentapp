import React, { FC } from "react";
import SearchSvg from "@assets/search.svg";
import MicrophoneSvg from "@assets/microphone.svg";
import DivideSvg from "@assets/divide.svg";
import FilterSvg from "@assets/filter.svg";
import {
  InputContainer,
  IconContainer,
  Input,
  RightIconContainer,
} from "./styles";

const InputFilter: FC = ({ ...rest }) => {
  return (
    <InputContainer>
      <IconContainer>
        <SearchSvg />
      </IconContainer>

      <Input {...rest} />

      <RightIconContainer>
        <IconContainer>
          <MicrophoneSvg />
          <DivideSvg />
          <FilterSvg />
        </IconContainer>
      </RightIconContainer>
    </InputContainer>
  );
};

export default InputFilter;
