import { nanoid } from '@reduxjs/toolkit'
import image1 from './assets/images/e-book icon.png'
import product_1 from './assets/images/shop-product-1.png'
import { createClient } from 'contentful'
import classimg1 from './assets/images/classes.jpg'
import classimg2 from './assets/images/classes1.jpg'
import classimg3 from './assets/images/classes2.jpg'
import classimg4 from './assets/images/classes3.jpg'
import classimg5 from './assets/images/classes4.jpg'
import classimg6 from './assets/images/classes5.jpg'
import classimg7 from './assets/images/classes6.jpg'
import classimg8 from './assets/images/classes7.jpg'
import classimg9 from './assets/images/classes8.jpg'
import trainer1 from './assets/images/trainer-1.png'
import trainer2 from './assets/images/trainer-2.png'
import trainer3 from './assets/images/trainer-3.png'
import trainer4 from './assets/images/trainer-4.png'
import trainer5 from './assets/images/trainer-5.png'
import trainer6 from './assets/images/trainer-6.png'
import trainer7 from './assets/images/trainer-7.png'
import trainer8 from './assets/images/trainer-8.png'
import trainer9 from './assets/images/trainer-9.png'
import trainer10 from './assets/images/trainer-10.png'
import trainer11 from './assets/images/trainer-11.png'
import trainer12 from './assets/images/trainer-12.png'

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

const client = createClient({
  space: 'dc28dkbw08sq',
  environment: 'master',
  accessToken: `L_elV5UaP_11g6VyKBTRg0fpTLdN8oGiozqu3VkoJW8`,
})

/* export const queryData = {
  queryKey: ['products'],
  queryFn: () => client.getEntries({ content_type: 'exerciseFitnessProducts' }),
} */

/* const products = async () => {
  const response = await client.getEntries({
    content_type: 'exerciseFitnessProducts',
  })

  try {
    const products = response.items
    productsFetching(products)
  } catch (error) {
    console.log(error.message)
  }
}

const dispatch = useDispatch()
const productsFetching = (products) => {
  dispatch(handleProductFetching({ products }))
}
 */

export const classes = [
  {
    title: 'mind & body fitness',
    level: 'intermediate level',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, pety doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    duration: '30 min',
    caloriesBurn: '250 KCals',
    url: 'mind-body-fitness',
    img: classimg1,
    type: 'tone up, weight loss',
    limit: '10 participants',
    place: 'forgefit gym',
    trainers: [
      {
        name: 'erick s. duncan',
        position: 'body builder',
        image: trainer5,
      },
      {
        name: 'alicia k. wright',
        position: 'fitness instructor',
        image: trainer2,
      },
      {
        name: 'ashley t. white',
        position: 'yoga teacher',
        image: trainer1,
      },
    ],
  },
  {
    title: 'break-thru fitness',
    level: 'advanced level',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, pety doeiusmod tempor incididunt ut labore et dolore magna aliqua.',
    duration: '60 min',
    caloriesBurn: '323 KCal',
    url: 'break-thru-fitness',
    img: classimg2,
    type: 'dancing, tone up',
    limit: '25 participants',
    place: 'fitness room B',
    trainers: [
      {
        name: 'alicia k. wright',
        position: 'fitness instructor',
        image: trainer2,
      },
      {
        name: 'whitney k. fowler',
        position: 'fitness instructor',
        image: trainer7,
      },
      {
        name: 'virginia f. bryant',
        position: 'dancing teacher',
        image: trainer12,
      },
      {
        name: 'barbara s. romero',
        position: 'yoga teacher',
        image: trainer6,
      },
    ],
  },
  {
    title: 'body building',
    level: 'advanced level',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, pety doeiusmod tempor incididunt ut labore et dolore magna aliqua.',
    duration: '60 min',
    caloriesBurn: '423 KCal',
    url: 'body-building',
    img: classimg3,
    type: 'muscle gain, strength',
    limit: '5 participants',
    place: 'box 85',
    trainers: [
      {
        name: 'dennis y. allen',
        position: 'body builder, boxe coach',
        image: trainer10,
      },
      {
        name: 'edward b. lewis',
        position: 'body builder',
        image: trainer11,
      },
      {
        name: 'erick s. duncan',
        position: 'body builder',
        image: trainer5,
      },
      {
        name: 'meghan p. ingram',
        position: 'body builder',
        image: trainer8,
      },
    ],
  },
  {
    title: 'cardio circuit',
    level: 'intermediate level',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, pety doeiusmod tempor incididunt ut labore et dolore magna aliqua.',
    duration: '60 min',
    caloriesBurn: '585 KCal',
    url: 'cardio-circuit',
    img: classimg4,
    type: 'cardio, endurance',
    limit: '15 participants',
    place: 'bike hall',
    trianers: [
      {
        name: 'wesley d. richards',
        position: 'personal trainer',
        image: trainer3,
      },
      {
        name: 'stephen j. kennedy',
        position: 'personal trainer',
        image: trainer4,
      },
      {
        name: 'virginia f. bryant',
        position: 'dancing teacher',
        image: trainer12,
      },
      {
        name: 'willie d. collins',
        position: 'personal trainer',
        image: trainer9,
      },
    ],
  },
  {
    title: 'crossfit',
    level: 'advanced level',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, pety doeiusmod tempor incididunt ut labore et dolore magna aliqua.',
    duration: '90 min',
    caloriesBurn: '600 KCal',
    url: 'crossfit',
    img: classimg5,
    type: 'muscle gain, strength',
    limit: '23 participants',
    place: 'box A',
    trainers: [
      {
        name: 'stephen j. kennedy',
        position: 'personal trainer',
        image: trainer4,
      },
      {
        name: 'dennis y. allen',
        position: 'body builder, boxe coach',
        image: trainer10,
      },
      {
        name: 'erick s. duncan',
        position: 'body builder',
        image: trainer5,
      },
      {
        name: 'wesley d. richards',
        position: 'personal trainer',
        image: trainer3,
      },
    ],
  },
  {
    title: 'aqua aerobics',
    level: 'beginner level',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, pety doeiusmod tempor incididunt ut labore et dolore magna aliqua.',
    duration: '60 min',
    caloriesBurn: '250 KCal',
    url: 'aqua-aerobics',
    img: classimg6,
    type: 'relaxation',
    limit: '20 participants',
    place: 'pool 1',
    trainers: [
      {
        name: 'barbara s. romero',
        position: 'yoga teacher',
        image: trainer6,
      },
      {
        name: 'virginia f. bryant',
        position: 'dancing teacher',
        image: trainer12,
      },
      {
        name: 'whitney k. fowler',
        position: 'fitness instructor',
        image: trainer7,
      },
    ],
  },
  {
    title: 'pilates',
    level: 'intermediate level',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, pety doeiusmod tempor incididunt ut labore et dolore magna aliqua.',
    duration: '60 min',
    caloriesBurn: '350 KCal',
    url: 'pilates',
    img: classimg7,
    type: 'rehabilitation, relaxation',
    limit: '20 participants',
    place: 'room A23',
    trainers: [
      {
        name: 'barbara s. romero',
        position: 'yoga teacher',
        image: trainer6,
      },
      {
        name: 'virginia f. bryant',
        position: 'dancing teacher',
        image: trainer12,
      },
      {
        name: 'whitney k. fowler',
        position: 'fitness instructor',
        image: trainer7,
      },
      {
        name: 'alicia k. wright',
        position: 'fitness instructor',
        image: trainer2,
      },
    ],
  },
  {
    title: 'zumba',
    level: 'beginner level',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, pety doeiusmod tempor incididunt ut labore et dolore magna aliqua.',
    duration: '60 min',
    caloriesBurn: '500 KCal',
    url: 'zumba',
    img: classimg8,
    type: 'cardio, dancing',
    limit: '15 participants',
    place: 'Gym A',
    trainers: [
      {
        name: 'virginia f. bryant',
        position: 'dancing teacher',
        image: trainer12,
      },
      {
        name: 'whitney k. fowler',
        position: 'fitness instructor',
        image: trainer7,
      },
      {
        name: 'barbara s. romero',
        position: 'yoga teacher',
        image: trainer6,
      },
    ],
  },
  {
    title: 'yoga',
    level: 'beginner level',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, pety doeiusmod tempor incididunt ut labore et dolore magna aliqua.',
    duration: '60 min',
    caloriesBurn: '150 KCal',
    url: 'mind-body-fitness',
    img: classimg9,
    type: 'relaxation',
    limit: '15 participants',
    place: 'Gym C',
    trainers: [
      {
        name: 'barbara s. romero',
        position: 'yoga teacher',
        image: trainer6,
      },
      {
        name: 'ashley t. white',
        position: 'yoga teacher',
        image: trainer1,
      },
      {
        name: 'whitney k. fowler',
        position: 'fitness instructor',
        image: trainer7,
      },
      {
        name: 'meghan p. ingram',
        position: 'body builder',
        image: trainer8,
      },
    ],
  },
]
