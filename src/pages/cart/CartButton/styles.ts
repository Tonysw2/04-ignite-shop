import { styled } from '@stitches/react'

export const ButtonContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '& > button': {
    backgroundColor: 'inherit',
    border: 'none',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  '& > button:disabled': {
    filter: 'brightness(0.5)',
    cursor: 'not-allowed',
  },

  '& > button:not(:disabled):hover': {
    transition: 'all 0.2s',
    filter: 'brightness(1.5)',
    cursor: 'pointer',
  },
})

export const IconContainer = styled('div', {
  maxHeight: 48,
  maxWidth: 48,
  padding: '0.75rem',
  backgroundColor: '$gray800 !important',
  borderRadius: 6,
  position: 'relative',
  color: '$gray100',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '& > span': {
    background: '$green500',
    color: '$gray100',
    width: '1.25rem',
    height: '1.25rem',
    borderRadius: 100,
    position: 'absolute',
    top: ' -10%',
    right: ' -10%',
    boxShadow: '0 0 0 2px #121214',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
