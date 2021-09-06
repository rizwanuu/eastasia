import React from "react";
import { FormattedMessage } from "react-intl";

import { RichTextEditorContent } from "@components/atoms";

import * as S from "./styles";
import { IProps } from "./types";

enum TABS {
  DESCRIPTION = "DESCRIPION",
  SPECIFICATIONS = "SPECIFICATIONS",
  REVIEWS = "REVIEWS"
}

export const ProductDescription: React.FC<IProps> = ({
  description,
  attributes,
}: IProps) => {
  const [activeTab, setActiveTab] = React.useState<TABS>(TABS.DESCRIPTION);

  return (
    <S.Wrapper>
      <S.Tabs>
        <S.TabTitle
          active={activeTab === TABS.DESCRIPTION}
          onMouseEnter={evt => {
            evt.stopPropagation();
            setActiveTab(TABS.DESCRIPTION);
          }}
          onClick={evt => {
            evt.stopPropagation();
            setActiveTab(TABS.DESCRIPTION);
          }}
        >
          <FormattedMessage defaultMessage="DESCRIPTION" />
        </S.TabTitle>
        <S.TabTitle
          active={activeTab === TABS.SPECIFICATIONS}
          onMouseEnter={evt => {
            evt.stopPropagation();
            setActiveTab(TABS.SPECIFICATIONS);
          }}
          onClick={evt => {
            evt.stopPropagation();
            setActiveTab(TABS.SPECIFICATIONS);
          }}
        >
          <FormattedMessage defaultMessage="SPECIFICATIONS" />
        </S.TabTitle>
        <S.TabTitle
          active={activeTab === TABS.REVIEWS}
          onMouseEnter={evt => {
            evt.stopPropagation();
            setActiveTab(TABS.REVIEWS);
          }}
          onClick={evt => {
            evt.stopPropagation();
            setActiveTab(TABS.REVIEWS);
          }}
        >
          <FormattedMessage defaultMessage="REVIEWS" />
        </S.TabTitle>
      </S.Tabs>
      <div hidden={activeTab !== TABS.DESCRIPTION}>
        <S.titleH2>
          <FormattedMessage defaultMessage="DESCRIPTION" />
        </S.titleH2>
        <RichTextEditorContent jsonData={description} />
      </div>
      <div hidden={activeTab !== TABS.SPECIFICATIONS}>
        <S.titleH2>
          <FormattedMessage defaultMessage="SPECIFICATIONS" />
        </S.titleH2>
        <S.AttributeList>
          {attributes &&
            attributes.map((attribute, index) => (
              <li key={index}>
                <S.AttributeName>{attribute.attribute.name}: </S.AttributeName>{" "}
                {attribute.values.map(value => value.name).join(", ")}
              </li>
            ))}
        </S.AttributeList>
      </div>
      <div hidden={activeTab !== TABS.REVIEWS}>
        <S.titleH2>
          <FormattedMessage defaultMessage="REVIEWS" />
        </S.titleH2>
        <div>
          m dolor sit amet, consectetur adipiscing elit. Fusce in purus rutrum, egestas metus bibendum, cursus massa. Nam orci enim, fringilla sit
          amet cursus et, auctor eget orci. Pellentesque non turpis ac ligula placerat euismod vel non urna. Nam sed diam felis. Sed dui mauris, ncidunt sit
          amet scelerisque vitae, ultrices non massa. Nunc at diam congue, laoreet lacus eget, efficitur eros. Pellentesque vitae convallis libero, eu dapibus
          urna. Praesent vehicula tortor vel pellentesque f
        </div>
      </div>
    </S.Wrapper>
  );
};
