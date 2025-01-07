import { RiErrorWarningLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { TiTimes } from 'react-icons/ti'
import { auth, database } from '../firebase/firebase.utils'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { Loading } from '../components'
import { useAuthState } from 'react-firebase-hooks/auth'

const Orders = () => {
  const [orders, setOrders] = useState([])
  const [dataLoading, setDataLoading] = useState(true)
  const [error, setError] = useState(null)
  /*  const { uid } = useSelector((state) => {
    return state.userState.user
  }) */
  const [user, loading] = useAuthState(auth)

  useEffect(() => {
    const fetchOrders = async () => {
      const ordersRef = collection(database, `orders/${user?.uid}/orders`)
      try {
        const ordersQuery = query(ordersRef, orderBy('createdAt', 'desc'))
        const querySnapshot = await getDocs(ordersQuery)
        const fetchedOrders = []
        querySnapshot.forEach((doc) => {
          fetchedOrders.push({ id: doc.id, ...doc.data() })
        })
        setOrders(fetchedOrders)
        setDataLoading(false)
      } catch (error) {
        setError('Failed to load orders')
      }
    }
    fetchOrders()
  }, [user?.uid])

  if (loading || dataLoading) {
    return <Loading />
  }
  if (error) {
    return <div>{error}</div>
  }
  if (!orders) {
    return (
      <section className="width my-10">
        <div className="border border-secondary text-xs p-5 rounded-md text-accent-80 bg-secondary/20 mb-4 flex items-center gap-x-1.5 ">
          <RiErrorWarningLine className="text-lg text-secondary" /> No order has
          been placed.
        </div>
        <div className="text-center border border-accent/10 border-t-transparent rounded-b-2xl">
          <Link to="/shop">
            <button
              type="button"
              className="text-white bg-primary rounded-[4px] uppercase text-xs w-[8.5rem] h-9 mb-12 hover:bg-secondary"
            >
              return to shop
            </button>
          </Link>
        </div>
      </section>
    )
  }
  return (
    <>
      <section className="bg-[url('./assets/images/shop_product_details.JPG')] h-[23vw] max-h-[180px] w-full bg-cover bg-center text-white flex justify-center flex-col">
        <div className="uppercase width">
          <h4 className=" text-xl sm:text-3xl font-semibold sm:mb-1">Orders</h4>
          <p className=" text-xs sm:text-sm   text-gray-300 tracking-wider">
            track your orders
          </p>
        </div>
      </section>
      <section className="width my-10">
        <table className="w-full">
          <thead className="uppercase text-[0.5rem] sm:text-sm text-start bg-base-200/40 text-accent/70">
            <tr>
              <th className="p-3 border text-left whitespace-nowrap ">
                order id
              </th>
              <th className="p-3 border text-left ">date</th>
              <th className="p-3 border text-left ">products</th>
              <th className="p-3 border text-left ">total</th>
              <th className="p-3 border text-left ">status</th>
            </tr>
          </thead>
          <tbody className="text-[0.5rem] sm:text-sm">
            {orders.map(
              ({ id, cartItems, createdAt, orderTotal, status }, index) => {
                const statusUpdate =
                  status == 'pending' ? 'bg-yellow-300' : 'bg-green-300'

                return (
                  <tr key={index}>
                    <td className="border p-3 text-accent/80 align-top">
                      {id}
                    </td>
                    <td className="border p-3 align-top ">{createdAt}</td>
                    <td className="border ">
                      <ul>
                        {cartItems.map(({ productName, amount }, index) => {
                          return (
                            <li
                              key={index}
                              className="flex items-center gap-1 text-gray-700 border-b last:border-b-0 p-3"
                            >
                              <span className="text-[.8rem] sm:text-lg italic font-semibold text-gray-800">
                                {amount}
                              </span>{' '}
                              <TiTimes />{' '}
                              <span className="capitalize">{productName}</span>
                            </li>
                          )
                        })}
                      </ul>
                    </td>
                    <td className="border p-3  text-accent/80 font-semibold  align-top">
                      <p>{orderTotal}</p>
                    </td>
                    <td className="border text-gray-800 p-3 align-top mx-auto">
                      <p
                        className={`w-max rounded py-0.5 px-2 ${statusUpdate}`}
                      >
                        {status}
                      </p>
                    </td>
                  </tr>
                )
              }
            )}
          </tbody>
        </table>
      </section>
    </>
  )
}
export default Orders
