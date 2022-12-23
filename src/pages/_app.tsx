import * as Dialog from '@radix-ui/react-dialog'
import type { AppProps } from 'next/app'
import Image from 'next/image'
import Link from 'next/link'
import LogoImg from '../assets/Logo.svg'
import { CartButton } from '../components/CartButton'
import { CartContextProvider } from '../contexts/CartContext'
import { globalStyles } from '../styles/global'
import { Container, Header } from '../styles/pages/app'
import { Cart } from './cart'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Container>
        <Header>
          <Link href="/">
            <Image src={LogoImg} alt="" />
          </Link>

          <Dialog.Root>
            <CartButton />
            <Cart />
          </Dialog.Root>
        </Header>

        <Component {...pageProps} />
      </Container>
    </CartContextProvider>
  )
}
