import { createContext, ReactNode, useState } from 'react'

interface ProductType {
  id: string
  name: string
  imageUrl: string
  price: number
  defaultPrice: string
}

interface CartContextType {
  cart: ProductType[]
  addToCart: (product: ProductType) => void
  removeFromCart: (productId: string) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<ProductType[]>([])

  function addToCart(product: ProductType) {
    setCart((prev) => {
      const alredyExist = prev.find(
        (prevProduct) => prevProduct.name === product.name,
      )

      if (alredyExist) return [...prev]

      return [...prev, product]
    })
  }

  function removeFromCart(productId: string) {
    const updatedCart = cart.filter((product) => product.id !== productId)
    setCart(updatedCart)
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}
