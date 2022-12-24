// import * as Dialog from '@radix-ui/react-dialog'
import { Handbag } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { CartButtonContainer, IconContainer } from './styles'

export default function CartButton() {
  const { cart } = useContext(CartContext)

  return (
    <CartButtonContainer disabled={cart.length === 0}>
      <IconContainer>
        <Handbag size={24} weight="bold" />
        {cart.length > 0 ? <span>{cart.length}</span> : null}
      </IconContainer>
    </CartButtonContainer>
  )
}
