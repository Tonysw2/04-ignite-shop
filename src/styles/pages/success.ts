import { styled } from '..'

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  margin: '0 auto',
  height: 656,

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
    marginBottom: 24,
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginBottom: 64,
  },

  a: {
    display: 'block',
    marginTop: '5rem',
    fontSize: '$lg',
    color: '$green500',
    fontWeight: 'bold',
    textDecoration: 'none',

    '&:hover': {
      color: '$green500',
    },
  },
})

export const ProductsContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  marginBottom: 48,
})

export const ImageContainer = styled('div', {
  width: 140,
  height: 140,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 100,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },

  '& + &': {
    marginLeft: -54,
    boxShadow: '0px 0px 60px rgba(0, 0, 0, 0.8)',
  },
})
