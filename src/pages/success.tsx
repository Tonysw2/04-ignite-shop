import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Stripe from 'stripe'
import { stripe } from '../lib/stripe'
import {
  ImageContainer,
  ProductsContainer,
  SuccessContainer,
} from '../styles/pages/success'

interface SuccessProps {
  customerName: string
  products: {
    name: string
    images: string[]
    id: string
  }[]
}

export default function Success({ customerName, products }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <ProductsContainer>
          {products.map((product) => {
            return (
              <ImageContainer key={product.id}>
                <Image
                  src={product.images[0]}
                  width={120}
                  height={110}
                  alt=""
                />
              </ImageContainer>
            )
          })}
        </ProductsContainer>

        <h1>Compra efetuada</h1>

        {products.length > 1 ? (
          <p>
            Uhuul <strong>{customerName}</strong>, suas{' '}
            <strong>{products.length}</strong> já estão a caminho da sua casa.
          </p>
        ) : (
          <p>
            Uhuul <strong>{customerName}</strong>, sua{' '}
            <strong>{products[0].name}</strong> já está a caminho da sua casa.
          </p>
        )}

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details!.name
  const products = session.line_items?.data.map(
    (product) => product.price?.product as Stripe.Product,
  )

  return {
    props: {
      customerName,
      products,
    },
  }
}
