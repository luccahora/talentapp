import React from "react";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";
import { Container, Title, Text, Subtitle } from "./styles";

const Brand = () => {
  return (
    <Container>
      <Svg width="42" height="42" viewBox="0 0 42 42" fill="none">
        <Path
          d="M40.909 18.416L23.6414 1.14843C22.1812 -0.311725 19.8187 -0.311725 18.3586 1.14843L1.09102 18.416C-0.36914 19.8762 -0.36914 22.2387 1.09102 23.6988L18.3586 40.9664C19.8187 42.4265 22.1812 42.4265 23.6414 40.9664L40.909 23.6988C42.3609 22.2387 42.3609 19.8762 40.909 18.416ZM28.5469 18.1945H28.3172V31.7953C28.3172 33.116 27.2426 34.1906 25.9219 34.1906H15.4793C14.1586 34.1906 13.084 33.116 13.084 31.7953V18.1945H5.36484L20.8195 2.99413L36.2742 18.1945H28.5469Z"
          fill="#000113"
        />
        <Path
          d="M30.975 15.4137H22.4273V30.4008C22.4273 31.5492 21.4922 32.4844 20.3437 32.4844C19.1953 32.4844 18.2602 31.5492 18.2602 30.4008V15.4137H10.5574L13.8387 11.8617H27.6937L30.975 15.4137Z"
          fill="#000113"
        />

        <Defs>
          <ClipPath id="clip0_1_x37">
            <Rect width="42" height="42" fill="white" />
          </ClipPath>
        </Defs>
      </Svg>
      <Text>
        <Title>Talent</Title>
        <Subtitle>1Mage</Subtitle>
      </Text>
    </Container>
  );
};

export default Brand;
