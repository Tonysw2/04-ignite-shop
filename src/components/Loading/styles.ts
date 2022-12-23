import { styled } from '@stitches/react'

export const LoadingContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2.4rem',
  maxWidth: 1180,
  height: 520,
  margin: '0 auto',

  '& > div': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})

export const Rectangle1 = styled('div', {
  width: 500,
  height: '100%',
  backgroundColor: '$gray800',
  borderRadius: 6,
})

export const Rectangle2 = styled('div', {
  width: 330,
  height: 32,
  backgroundColor: '$gray800',
  borderRadius: 6,
})

export const Rectangle3 = styled('div', {
  width: 100,
  height: 32,
  backgroundColor: '$gray800',
  borderRadius: 6,
})
