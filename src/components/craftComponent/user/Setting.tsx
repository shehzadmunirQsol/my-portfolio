import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button as ChakraButton,
  Tag,
  Text,
} from '@chakra-ui/react';
import { useEditor } from '@craftjs/core';
import React from 'react';

export const SettingsPanel = () => {
  const { actions, selected, isEnabled }: any = useEditor((state, query) => {
    const currentNodeId: any = query.getEvent('selected').last();
    let selected: any;

    if (currentNodeId) {
      selected = {
        id: currentNodeId,
        name: state?.nodes[currentNodeId]?.data?.name,
        settings:
          state?.nodes[currentNodeId]?.related &&
          state?.nodes[currentNodeId]?.related?.settings,
        isDeletable: query.node(currentNodeId).isDeletable(),
      };
    }

    return {
      selected,
      isEnabled: state.options.enabled,
    };
  });

  return isEnabled && selected ? (
    <>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              <div className="flex   justify-between items-center w-full ">
                <Text variant="subtitle1">Selected</Text>

                <Tag
                  size={'sm'}
                  variant="solid"
                  colorScheme="teal"
                  data-cy="chip-selected"
                >
                  {selected.name}
                </Tag>
              </div>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <div className="flex flex-col w-full  gap-2">
            <Box bg="rgba(0, 0, 0, 0.06)" mt={2} mb={2} px={2} py={2}>
              <div className="flex flex-col w-full">
                <div data-cy="settings-panel">
                  {selected.settings && React.createElement(selected.settings)}
                </div>
                {selected.isDeletable ? (
                  <ChakraButton
                    variant="outline"
                    color="teal"
                    onClick={() => {
                      actions.delete(selected.id);
                    }}
                  >
                    Delete
                  </ChakraButton>
                ) : null}
              </div>
            </Box>
          </div>
        </AccordionPanel>
      </AccordionItem>
    </>
  ) : null;
};
