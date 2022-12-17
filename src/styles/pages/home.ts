import { styled } from '..'

export const HomeContainer = styled('main', {
  display: 'flex',
  alignItems: 'center',
  // gap: '3rem',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  margin: '0 auto',
  minHeight: 656,
  position: 'relative',

  '.arrow': {
    width: '4%',
    position: 'absolute',
    zIndex: 10,
    height: '100%',
    border: 'none',
    cursor: 'pointer',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  '.arrow:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '.arrow-left': {
    background: 'linear-gradient(270deg, transparent 0%, $gray900 120%)',
    left: 0,
  },

  '.arrow-right': {
    background: 'linear-gradient(90deg, transparent 0%, $gray900 120%)',
    right: 0,
  },
})

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  // padding: '0 0.25rem',
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '2rem',

    borderRadius: 6,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    strong: {
      fontSize: '$lg',
      color: '$gray100',
    },

    span: {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300',
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },
})
