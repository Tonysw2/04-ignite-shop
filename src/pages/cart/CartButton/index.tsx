import * as Dialog from '@radix-ui/react-dialog'
import { Handbag } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../../contexts/CartContext'
import { ButtonContainer, IconContainer } from './styles'

export function CartButton() {
  const { cart } = useContext(CartContext)

  return (
    <ButtonContainer>
      <Dialog.Trigger asChild>
        <button disabled={cart.length === 0}>
          <IconContainer>
            <Handbag size={24} weight="bold" />
            {cart.length > 0 ? <span>{cart.length}</span> : null}
          </IconContainer>
        </button>
      </Dialog.Trigger>
    </ButtonContainer>
  )
}
