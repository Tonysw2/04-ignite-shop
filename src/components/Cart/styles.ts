import * as Dialog from '@radix-ui/react-dialog'
import { styled } from '@stitches/react'

export const Content = styled(Dialog.Content, {
  position: 'fixed',
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  height: '100vh',
  width: 550,
  padding: '72px 48px 48px 48px',
  backgroundColor: '$gray800',
  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',
  zIndex: 999,

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  '& > h2': {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    lineHeight: 1.6,
  },
})

export const ListContainer = styled('ul', {
  listStyle: 'none',
  marginTop: 32,
  maxHeight: 350,
  height: '100%',
  overflowY: 'auto',

  display: 'flex',
  flexDirection: 'column',
  gap: 24,

  '&::-webkit-scrollbar': {
    width: 5,
    borderRadius: 8,
  },

  '&::-webkit-scrollbar-thumb': {
    borderRadius: 8,
    backgroundColor: '$gray900',
  },

  '& > li': {
    display: 'flex',
    alignItems: 'center',
    gap: 20,
  },
})

export const ImageContainer = styled('div', {
  width: 102,
  height: 93,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '& > img': {
    width: 95,
    height: 95,
  },
})

export const DetailsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',

  '& > p': {
    fontSize: 18,
    lineHeight: 1.6,
    color: '$gray300',
    marginBottom: 2,
  },

  '& > strong': {
    fontSize: 18,
    lineHeight: 1.6,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  '& > button': {
    border: 'none',
    background: 'transparent',
    fontSize: 16,
    lineHeight: 1.6,
    fontWeight: 'bold',
    color: '$green500',
    cursor: 'pointer',
  },

  '& > button:hover': {
    transition: 'all 0.2s',
    color: '$green300',
  },
})

export const FooterContainer = styled('footer', {
  '& > div': {
    marginBottom: 55,

    '& > p': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    '& > p:first-child': {
      fontSize: 16,
      lineHeight: 1.6,
      color: '$gray300',

      span: {
        fontSize: 18,
      },
    },

    '& > p:last-child': {
      fontSize: 18,
      fontWeight: 'bold',
      lineHeight: 1.6,
      color: '$gray100',

      span: {
        fontSize: 24,
      },
    },
  },

  '& > button': {
    padding: '20px 32px',
    width: '100%',
    border: 'none',
    borderRadius: 8,
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 1.6,
    color: '$gray100',
    backgroundColor: '$green500',
    cursor: 'pointer',

    '&:disabled': {
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      transition: 'all 0.2s',
      backgroundColor: '$green300',
    },
  },
})

export const ButtonClose = styled(Dialog.Close, {
  position: 'absolute',
  top: 40,
  right: 40,
  backgroundColor: 'transparent',
  color: '$gray200',
  border: 'none',
  cursor: 'pointer',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})
