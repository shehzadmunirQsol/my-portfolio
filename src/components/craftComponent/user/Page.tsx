import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import { useNode } from "@craftjs/core";

import React from "react";

export const Page = ({
  background,
  padding,
  children,
  width,
  box,
  ...props
}: any) => {
  const {
    connectors: { connect, drag },
    selected,
    dragged,
    actions: { setProp },
  } = useNode((state) => ({
    selected: state.events.selected,
    dragged: state.events.dragged,
  }));
  return (
    <Flex
      {...props}
      ref={(ref: any) => connect(drag(ref))}
      style={{
        margin: "5px 0",
        background,
        padding: `${padding}px`,
        width: `${21}cm`,
        height: `${29.7}cm`,
        display: `flex`,
      }}
      className={`  gap-2 ${
        (selected || dragged) && "border-2 border-black "
      } ${box ? box : "flex-col"} shadow-md`}
    >
      {children}
    </Flex>
  );
};

export const PageSettings = () => {
  const {
    background,
    padding,
    width,
    box,
    actions: { setProp },
  } = useNode((node) => ({
    background: node.data.props.background,
    padding: node.data.props.padding,
    width: node.data.props.width,
    box: node.data.props.box,
  }));

  return (
    <div className="flex flex-col gap-2 space-y-2">
      <FormControl size="small">
        <FormLabel>Background</FormLabel>
        <Input
          type="color"
          defaultValue={background}
          onChange={(e: any) => {
            setProp((props) => (props.background = e.target.value), 1000);
          }}
        />
      </FormControl>
      <FormControl size="small">
        <FormLabel>padding</FormLabel>
        <Slider
          aria-label="slider-ex-1"
          value={padding || 2}
          step={1}
          min={1}
          max={50}
          defaultValue={padding}
          onChange={(val: any) => {
            setProp((props) => (props.padding = val), 1000);
          }}
        >
          <SliderMark
            value={padding}
            textAlign="center"
            bg="blue.500"
            color="white"
            mt="2"
            ml="-5"
            w="12"
          >
            {padding}px
          </SliderMark>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </FormControl>
      <FormControl size="small">
        <FormLabel>Width</FormLabel>
        <Slider
          aria-label="slider-ex-1"
          value={width || 2}
          step={5}
          min={1}
          max={100}
          defaultValue={width}
          onChange={(val: any) => {
            setProp((props) => (props.width = val), 1000);
          }}
        >
          <SliderMark
            value={width}
            textAlign="center"
            bg="blue.500"
            color="white"
            mt="2"
            ml="-5"
            w="12"
          >
            {width}%
          </SliderMark>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </FormControl>
      <FormControl size="small">
        <FormLabel>Direction</FormLabel>
        <Select
          placeholder="Select Direction"
          value={box}
          onChange={(e: any) => {
            setProp((props) => (props.box = e.target.value));
          }}
        >
          <option value="flex-row">Row</option>
          <option value="flex-col">Column</option>
        </Select>
      </FormControl>

      <FormControl size="small"></FormControl>
    </div>
  );
};

export const PageDefaultProps = {
  background: "#ffffff",
  padding: 2,
};

Page.craft = {
  props: PageDefaultProps,
  related: {
    settings: PageSettings,
  },
};
