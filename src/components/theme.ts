import { extendTheme } from '@chakra-ui/react';
const activeLabelStyles = {
  transform: 'scale(0.85) translateY(-18px)',
};
export const theme = extendTheme({
  
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
            },
            'input:not(:placeholder-shown) + label , .chakra-select__wrapper + label':
              {
                transform: 'scale(0.85) translateY(-18px) ',
              },
            label: {
              top: 3,
              left: 0,
              zIndex: 2,
              position: 'absolute',
              pointerEvents: 'none',
              color: 'temp-10 !important',
              mx: 2,
              px: 1,

              mb: 2,
              transformOrigin: 'left top',
            },
          },
        },
      },
    },
    Drawer: {
      variants: {
        alwaysOpen: {
          parts: ['dialog, dialogContainer'],
          dialog: {
            pointerEvents: 'auto',
          },
          dialogContainer: {
            pointerEvents: 'none',
          },
        },
      },
    },
  },
});
