import { useEditor, Element } from "@craftjs/core";
import React from "react";

import { Button } from "./Button";
import { Card } from "./Card";
import { Container } from "./Container";
import { Text } from "./Text";
import Images from "./Image";
import Banner from "~/public/images/Toshi_banner.svg";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button as ChakraButton,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  useDisclosure,
} from "@chakra-ui/react";
import { SettingsPanel } from "./Setting";
import { DropDownItem } from "./DropDownItem";
import { Layers } from "@craftjs/layers";
import { Page } from "./Page";

export const Toolbox = (props: any) => {
  const { actions, query, enabled, canUndo, canRedo, connectors } = useEditor(
    (state, query) => ({
      enabled: state.options.enabled,
      canUndo: state.options.enabled && query.history.canUndo(),
      canRedo: state.options.enabled && query.history.canRedo(),
    })
  );
  const { onClose } = useDisclosure();

  return (
    <>
      <>
        <ChakraButton
          className="!bg-teal-950 text-white hover:!bg-teal-700"
          onClick={() => props?.setModalState(!props?.modalState)}
        >
          {props?.modalState ? "Close" : "Open"} Editor
        </ChakraButton>
        <Drawer
          variant="alwaysOpen"
          isOpen={props?.modalState}
          placement="left"
          onClose={onClose}
          trapFocus={false}
          closeOnOverlayClick={false}
          blockScrollOnMount={false}
          useInert={false}
        >
          <DrawerContent>
            <DrawerCloseButton
              onClick={() => props?.setModalState(!props?.modalState)}
            />
            <DrawerHeader>XOLTON EDITOR </DrawerHeader>

            <DrawerBody className="gap-2 space-y-2">
              <Accordion defaultIndex={[0, 1]} allowMultiple>
                {/* META INFO */}

                {/* DRAGGABLE COMPONENTS */}
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Draggable Components
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    {/* <div className="flex flex-col w-full px-4 py-2 gap-2"> */}
                    <div className="grid w-full grid-cols-3 gap-1 px-1 py-1 text-sm">
                      <div className="w-full  ">
                        <div
                          className={`flex flex-col flex-wrap items-center ${"bg-boxdark"} w-full cursor-move text-clip rounded-md p-1 py-2 text-center text-sm font-normal text-white`}
                          ref={(ref: any) =>
                            connectors.create(ref, <Text text="Hi world" />)
                          }
                          data-cy="toolbox-text"
                        >
                          <i className="text-md fa-solid fa-pen  text-white"></i>
                          Text
                        </div>
                      </div>

                      <div className="w-full">
                        <div
                          className={`flex flex-col flex-wrap items-center ${"bg-boxdark"} cursor-move text-clip rounded-md p-1 py-2 text-center text-sm font-normal  text-white`}
                          ref={(ref: any) =>
                            connectors.create(
                              ref,
                              <Element
                                canvas
                                is={Container}
                                padding={20}
                                background="#eeee"
                                width="100"
                              />
                            )
                          }
                          data-cy="toolbox-container"
                        >
                          <i className="text-md fa-regular fa-square  text-white"></i>
                          Container
                        </div>
                      </div>
                      <div className="w-full">
                        <div
                          className={`flex flex-col flex-wrap items-center ${"bg-boxdark"} cursor-move text-clip rounded-md p-1 py-2 text-center text-sm font-normal  text-white`}
                          ref={(ref: any) =>
                            connectors.create(
                              ref,
                              <Element
                                canvas
                                is={Page}
                                padding={20}
                                background="#eeee"
                              />
                            )
                          }
                          data-cy="toolbox-page"
                        >
                          <i className="text-md fa-regular fa-square  text-white"></i>
                          Page
                        </div>
                      </div>
                      <div className="w-full">
                        <div
                          className={`flex flex-col flex-wrap items-center ${"bg-boxdark"} cursor-move text-clip rounded-md p-1 py-2 text-center text-sm font-normal  text-white`}
                          ref={(ref: any) =>
                            connectors.create(
                              ref,
                              <Element
                                canvas
                                is={Container}
                                padding={0}
                                background="#ffff"
                                width="100"
                                box="flex-row"
                              >
                                <Element
                                  canvas
                                  is={Container}
                                  padding={20}
                                  background="#eeee"
                                  width="100"
                                >
                                  <Text
                                    size="small"
                                    text="Column-1"
                                    data-cy="frame-container-text"
                                  />
                                </Element>
                                <Element
                                  canvas
                                  is={Container}
                                  padding={20}
                                  background="#eeee"
                                  width="100"
                                >
                                  <Text
                                    size="small"
                                    text="Column-2"
                                    data-cy="frame-container-text"
                                  />
                                </Element>
                              </Element>
                            )
                          }
                          data-cy="toolbox-container"
                        >
                          <i className="text-md fa-solid fa-columns  text-white"></i>
                          Column
                        </div>
                      </div>
                      <div className="w-full">
                        <div
                          className={`flex flex-col flex-wrap items-center ${"bg-boxdark"} cursor-move text-clip rounded-md p-1 py-2 text-center text-sm font-normal  text-white`}
                          ref={(ref: any) =>
                            connectors.create(
                              ref,
                              <Element
                                canvas
                                is={Container}
                                padding={0}
                                background="#ffff"
                                width="100"
                                box="flex-col"
                              >
                                <Element
                                  canvas
                                  is={Container}
                                  padding={10}
                                  background="#eeee"
                                  width="100"
                                >
                                  <Text
                                    size="small"
                                    text="Row-1"
                                    data-cy="frame-container-text"
                                  />
                                </Element>
                                <Element
                                  canvas
                                  is={Container}
                                  padding={10}
                                  background="#eeee"
                                  width="100"
                                >
                                  <Text
                                    size="small"
                                    text="Row-2"
                                    data-cy="frame-container-text"
                                  />
                                </Element>
                              </Element>
                            )
                          }
                          data-cy="toolbox-container"
                        >
                          <i className="text-md fa-solid fa-bars  text-white"></i>
                          Row
                        </div>
                      </div>
                      <div className="w-full">
                        <div
                          ref={(ref: any) =>
                            connectors.create(
                              ref,
                              <Button
                                text="Click me"
                                size="sm"
                                color={"teal"}
                                variant={"solid"}
                              />
                            )
                          }
                          className={`flex flex-col flex-wrap items-center ${"bg-boxdark"} cursor-move text-clip rounded-md p-1 py-2 text-center text-sm font-normal  text-white`}
                          data-cy="toolbox-button"
                        >
                          <i className="text-md fa-solid fa-link  text-white"></i>
                          Button
                        </div>
                      </div>
                      <div className="w-full">
                        <div
                          className={`flex cursor-move flex-col flex-wrap items-center text-clip rounded-md bg-boxdark p-1 py-2 text-center text-sm font-normal  text-white`}
                          ref={(ref: any) =>
                            connectors.create(
                              ref,
                              <Images src={Banner.src} alt="Image" href="#" />
                            )
                          }
                          data-cy="toolbox-image"
                        >
                          <i className="text-md fa-solid fa-image  text-white"></i>
                          Image
                        </div>
                      </div>
                      <div className="w-full">
                        <div
                          className={`flex flex-col flex-wrap items-center ${"bg-boxdark"} cursor-move text-clip rounded-md p-1 py-2 text-center text-sm font-normal  text-white`}
                          ref={(ref: any) => connectors.create(ref, <Card />)}
                          data-cy="toolbox-card"
                        >
                          <i className="text-md fa-solid fa-folder  text-white"></i>
                          Card
                        </div>
                      </div>

                      <div className="w-full">
                        <div
                          className={`flex flex-col flex-wrap items-center ${"bg-boxdark"} cursor-move text-clip rounded-md p-1 py-2 text-center text-sm font-normal  text-white`}
                          ref={(ref: any) =>
                            connectors.create(
                              ref,
                              <DropDownItem text="Hi world" text2="Hi world" />
                            )
                          }
                          data-cy="toolbox-dropdown"
                        >
                          <i className="text-md fa-solid fa-toggle-on  text-white"></i>
                          Toggle
                        </div>
                      </div>
                    </div>
                  </AccordionPanel>
                </AccordionItem>
                <SettingsPanel />

                {/* <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Components Layers
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <div className="flex flex-col w-full px-4 py-2 gap-2">
                      <div className="w-full">
                        <Layers />
                      </div>
                    </div>
                  </AccordionPanel>
                </AccordionItem> */}
              </Accordion>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    </>
  );
};
