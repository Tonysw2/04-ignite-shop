import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import Stripe from 'stripe'
import { Arrow } from '../components/Arrow/Arrow'
import { stripe } from '../lib/stripe'

import { HomeContainer, Product } from '../styles/pages/home'

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: number
  }[]
}

export default function Home({ products }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {loaded && instanceRef.current && (
          <>
            <Arrow
              direction="left"
              onClick={(e) => {
                e.stopPropagation() || instanceRef.current?.prev()
              }}
              isDisabled={currentSlide === 0}
            />
            <Arrow
              direction="right"
              onClick={(e) => {
                e.stopPropagation() || instanceRef.current?.next()
              }}
              isDisabled={
                currentSlide ===
                Math.floor(
                  (instanceRef.current.track.details.slides.length - 1) / 3,
                )
              }
            />
          </>
        )}

        {products.map((product) => {
          return (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              className="keen-slider__slide"
            >
              <Product>
                <Image src={product.imageUrl} width={520} height={480} alt="" />

                <footer>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </footer>
              </Product>
            </Link>
          )
        })}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount! / 100),
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}
