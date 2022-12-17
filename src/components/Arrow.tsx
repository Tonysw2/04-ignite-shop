import { CaretLeft, CaretRight } from 'phosphor-react'

interface ArrowProps {
  isDisabled: boolean
  direction: 'left' | 'right'
  onClick: (event: any) => void
}

export function Arrow({ direction, onClick, isDisabled }: ArrowProps) {
  return (
    <button
      className={`arrow ${direction === 'left' ? 'arrow-left' : 'arrow-right'}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {direction === 'left' ? (
        <CaretLeft size={32} weight="bold" color="#ffffff" />
      ) : (
        <CaretRight size={32} weight="bold" color="#ffffff" />
      )}
    </button>
  )
}
