import React, { ReactElement } from "react";
import {
  Categories,
  CategoriesTitle,
  CategoryOptions,
  Container,
  Description,
  Header,
  Photo,
  Right,
  SearchContainer,
  Title,
  Option,
  OptionDescription,
} from "./styles";
import HamburgerSvg from "@assets/hamburguer.svg";
import BellSvg from "@assets/bell.svg";
import InputFilter from "@components/InputFilter";
import Banner from "@components/Banner";
import imageSource from "@assets/unsplash.png";
import GroupSvg from "@assets/group.svg";
import MegaphoneSvg from "@assets/megaphone.svg";
import BagSvg from "@assets/bag.svg";
import CoinSvg from "@assets/coin.svg";
import { ScrollView } from "react-native";

interface CategoryOptionProps {
  icon: any;
  description: string;
}

function CategoryOption({
  icon: Icon,
  description,
}: CategoryOptionProps): ReactElement {
  return (
    <Option>
      <Icon />
      <OptionDescription>{description}</OptionDescription>
    </Option>
  );
}

export function Home() {
  return (
    <Container>
      <Header>
        <HamburgerSvg />
        <Right>
          <BellSvg />
          <Photo source={require("@assets/imageProfile.png")} />
        </Right>
      </Header>
      <ScrollView>
        <SearchContainer>
          <Title>Hello, Maria 👋🏻</Title>
          <Description>What do you wanna donate today?</Description>
          <InputFilter />
          <Banner
            imageSource={imageSource}
            text={`Do you really have \na creative idea?`}
            buttonText="Start Campaign"
            imageHeight={200}
            imageWidth={344}
          />
        </SearchContainer>
        <Categories>
          <CategoriesTitle>Categories</CategoriesTitle>

          <CategoryOptions>
            <CategoryOption icon={GroupSvg} description="All" />
            <CategoryOption icon={MegaphoneSvg} description="Campaigns" />
            <CategoryOption icon={BagSvg} description="Donate Goods" />
            <CategoryOption icon={CoinSvg} description="Charity" />
          </CategoryOptions>
        </Categories>
      </ScrollView>
    </Container>
  );
}
