import { nanoid } from '@reduxjs/toolkit'
import image1 from './assets/images/e-book icon.png'
import product_1 from './assets/images/shop-product-1.png'

export const productList = [
  {
    productImage: product_1,
    productName: 'shester bench',
    productRatings: 5,
    productPrice: 20000,
    category: 'equipment',
    subCategory: 'machines',
    topRated: true,
    productColor: ['Blue', 'Red', 'White'],
    productBrand: 'Beforemath',
    sale: false,
    discountPrice: 18000,
    productId: 'shester-bench',
    productDesc:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur neque libero quaerat? Maxime quae odit saepe eveniet sapiente deserunt earum temporibus aliquam ullam in, rem ad provident, repellendus suscipit perferendis.',
  },
  {
    productImage: image1,
    productName: 'E-book 2',
    productRatings: 5,
    productPrice: 50000,
    category: 'equipment',
    topRated: true,
    productColor: ['Red'],
    productBrand: 'Beforemath',
    sale: true,
    discountPrice: 18000,
    productId: nanoid(),
  },
  {
    productImage: image1,
    productName: 'E-book 3',
    productRatings: 5,
    productPrice: 6000,
    category: 'nutrition',
    topRated: true,
    productColor: ['Red'],
    productBrand: 'Beforemath',
    productId: nanoid(),
  },
  {
    productImage: image1,
    productName: 'E-book 4',
    productRatings: 4,
    productPrice: 2000,
    category: 'nutrition',
    topRated: true,
    productColor: ['Red'],
    productBrand: 'Beforemath',
    productId: nanoid(),
  },
  {
    productImage: image1,
    productName: 'E-book 5',
    productRatings: 4,
    productPrice: 20000,
    category: 'nutrition',
    topRated: false,
    productColor: ['Red'],
    productBrand: 'Beforemath',
    sale: true,
    discountPrice: 18000,
    productId: nanoid(),
  },
  {
    productImage: image1,
    productName: 'E-book 6',
    productPrice: 25000,
    category: 'nutrition',
    topRated: false,
    productColor: ['Red'],
    productBrand: 'Humane Labs Raid',
    productId: nanoid(),
  },
  {
    productImage: image1,
    productName: 'E-book 7',
    productRatings: 4,
    productPrice: 2000,
    category: 'nutrition',
    topRated: false,
    productColor: ['Red'],
    productBrand: 'Beforemath',
    productId: nanoid(),
  },
  {
    productImage: image1,
    productName: 'E-book 8',
    productRatings: 4,
    productPrice: 2000,
    category: 'nutrition',
    topRated: false,
    productColor: ['Red'],
    productBrand: 'Beforemath',
    productId: nanoid(),
  },
  {
    productImage: image1,
    productName: 'E-book 9',
    productRatings: 4,
    productPrice: 2000,
    category: 'nutrition',
    topRated: false,
    productColor: ['Red'],
    productBrand: 'Beforemath',
    productId: nanoid(),
  },
  {
    productImage: image1,
    productName: 'E-book 10',
    productRatings: 4,
    productPrice: 2000,
    category: 'nutrition',
    topRated: false,
    productColor: ['Red'],
    productBrand: 'Beforemath',
    sale: true,
    discountPrice: 18000,
    productId: nanoid(),
  },
  {
    productImage: image1,
    productName: 'E-book 11',
    productRatings: 4,
    productPrice: 2000,
    category: 'nutrition',
    topRated: false,
    productColor: ['Red'],
    productBrand: 'Beforemath',
    productId: nanoid(),
  },
  {
    productImage: image1,
    productName: 'E-book 12',
    productRatings: 5,
    productPrice: 2000,
    category: 'equipment',
    topRated: true,
    productColor: ['Blue'],
    productBrand: 'Higher',
    productId: nanoid(),
  },
  {
    productImage: image1,
    productName: 'E-book 13',
    productRatings: 5,
    productPrice: 50000,
    category: 'equipment',
    topRated: true,
    productColor: ['Blue'],
    productBrand: 'Higher',
    productId: nanoid(),
  },
  {
    productImage: image1,
    productName: 'E-book 14',
    productRatings: 5,
    productPrice: 60000,
    category: 'equipment',
    topRated: true,
    productColor: ['Blue'],
    productBrand: 'Higher',
    productId: nanoid(),
  },
  {
    productImage: image1,
    productName: 'E-book 15',
    productRatings: 5,
    productPrice: 70000,
    category: 'equipment',
    topRated: true,
    productColor: ['Blue'],
    productBrand: 'Higher',
    productId: nanoid(),
  },
]
