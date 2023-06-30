import React, { useState } from "react";
import { Editor, Frame, Element } from "@craftjs/core";
import { Button } from "~/components/craftComponent/user/Button";
import {
  Card,
  CardBottom,
  CardTop,
} from "~/components/craftComponent/user/Card";
import { Container } from "~/components/craftComponent/user/Container";
import Images from "~/components/craftComponent/user/Image";
import { Text } from "~/components/craftComponent/user/Text";
import { DropDownItem } from "~/components/craftComponent/user/DropDownItem";
import Art from "~/public/images/connecting_artworks.svg";
import { TopbarPages } from "./user/TopBarPages";
import { RenderNode } from "./RenderNode";
import { Viewport } from "./ViewPort";
import { Page } from "./user/Page";

export default function CraftJsPagesComponent(props: any) {
  const [modalState, setModalState] = useState(true);

  return (
    <div
      className={`  ${modalState ? "md:lg:w-full lg:w-3/4" : "w-full"} ${
        modalState ? "md:ml-0 lg:ml-80 " : "lg:ml-0"
      } m-auto mb-2 `}
    >
      <Editor
        resolver={{
          Card,
          Button,
          Text,
          Container,
          Page,
          CardTop,
          CardBottom,
          Images,
          DropDownItem,
        }}
        onRender={RenderNode}
      >
        <TopbarPages modalState={modalState} setModalState={setModalState} />

        <Viewport>
          <Frame>
            <Element
              canvas
              is={Container}
              width={"100"}
              padding={20}
              background={`${"#F1F3F5"}`}
              data-cy="root-container"
            >
              <Element
                canvas
                is={Page}
                padding={1}
                box={"flex-col"}
                width={"100"}
                background="#ffff"
                data-cy="frame-container"
              >
                <Images src={Art.src} width={"100"} alt="Logo" href="" />

                <Element
                  canvas
                  is={Container}
                  padding={1}
                  box={"flex-row"}
                  width={"100"}
                  background="#ffff"
                  data-cy="frame-container"
                >
                  <Element
                    canvas
                    is={Container}
                    padding={1}
                    width={"100"}
                    background="#ffff"
                    data-cy="frame-container"
                  >
                    <Text
                      size="small"
                      text="Lorem Ipsum"
                      data-cy="frame-container-text"
                    />
                  </Element>
                  <Element
                    canvas
                    is={Container}
                    padding={0}
                    width={"100"}
                    background="#ffff"
                    data-cy="frame-container"
                  >
                    <Images src={Art.src} alt="Logo" href="" />
                  </Element>
                </Element>

                <Element
                  canvas
                  is={Container}
                  padding={2}
                  width={"100"}
                  background="#ffff"
                  data-cy="frame-container"
                >
                  <Images src={Art.src} alt="Logo" href="" />
                  <Text
                    fontSize={34}
                    text="FAQ's"
                    fontAlign={"center"}
                    data-cy="frame-container-text"
                  />
                  <DropDownItem
                    text="question no: 01"
                    text2="Answer"
                    data-cy="frame-container-dropdownitem"
                  />
                  <DropDownItem
                    text="question no: 02"
                    text2="Answer"
                    data-cy="frame-container-dropdownitem"
                  />
                  <DropDownItem
                    text="question no: 03"
                    text2="Answer"
                    data-cy="frame-container-dropdownitem"
                  />
                </Element>
              </Element>
            </Element>
          </Frame>
        </Viewport>
      </Editor>
    </div>
  );
}
