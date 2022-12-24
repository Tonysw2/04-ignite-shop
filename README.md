# Ignite shop

A shop for buying shirts. The user follows all the steps of a real store: adding or removing a product from the cart, going through the checkout and ending up on the success page.

## Functionalities 

- slide through the products
- go to the product page on selecting it
- add or remove the product to the cart
- redirect to stripe checkout when click "buy" button in cart
- redirect to home page if you cancel the purchase
- redirect to success page if your checkout succeed


## Project access

You can check the site in operation <a href='https://04-ignite-shop-eight.vercel.app/' target='_blank' >clicking here</a>.

On this link when you go to checkout, if you cancel or succeed you will not be redirected to home or success page, I do not figured out yet why.

## How to run the project

Open the terminal and run `npm i` to install all dependencis of the project.

Then run `npm run dev` to open the project locally.

This project is build with Next.js so you can run in production typing `npm run build` and then `npm run start`.

You must have a stripe account to get the public and secret key.

Create a `.env` file and create the following variables:

`NEXT_URL` `STRIPE_PUBLIC_KEY` `STRIPE_SECRET_KEY`

## Technologies

- `stripe`
- `styled-components`
- `keen-slider`
- `axios`
- `radix-ui`
- `stitches`
- `next`