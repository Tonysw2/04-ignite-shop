import * as Dialog from '@radix-ui/react-dialog'
import axios from 'axios'
import { X } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
import {
  ButtonClose,
  Content,
  DetailsContainer,
  FooterContainer,
  ImageContainer,
  ListContainer,
} from './styles'

export function Cart() {
  const { cart, removeFromCart } = useContext(CartContext)
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  async function handleBuyProducts() {
    try {
      setIsCreatingCheckoutSession(true)

      const checkoutItems = cart.map((product) => {
        return {
          price: product.defaultPrice,
          quantity: 1,
        }
      })
      console.log(checkoutItems)

      const response = await axios.post('/api/checkout', { checkoutItems })
      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (error) {
      alert('Falha ao redirectionar checkout!')
    } finally {
      setIsCreatingCheckoutSession(false)
    }
  }

  return (
    <Dialog.Portal>
      <Content>
        <div>
          <Dialog.Title>Sacola de compras</Dialog.Title>

          <ListContainer>
            {cart.length > 0 &&
              cart.map((product) => {
                return (
                  <li key={product.id}>
                    <ImageContainer>
                      <img src={product.imageUrl} alt="" />
                    </ImageContainer>

                    <DetailsContainer>
                      <p>{product.name}</p>
                      <strong>
                        {new Intl.NumberFormat('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        }).format(product.price / 100)}
                      </strong>
                      <button onClick={() => removeFromCart(product.id)}>
                        Remover
                      </button>
                    </DetailsContainer>
                  </li>
                )
              })}
          </ListContainer>
        </div>

        <FooterContainer>
          <div>
            <p>
              Quantidade <span>{cart.length} itens</span>
            </p>
            <p>
              Valores
              <span>
                {cart.length > 0 &&
                  new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(
                    cart.reduce((acc, reduce) => acc + reduce.price, 0) / 100,
                  )}
              </span>
            </p>
          </div>

          <button
            disabled={isCreatingCheckoutSession || cart.length === 0}
            onClick={handleBuyProducts}
          >
            Comprar
          </button>
        </FooterContainer>
        <ButtonClose>
          <X size={24} weight="bold" />
        </ButtonClose>
      </Content>
    </Dialog.Portal>
  )
}
