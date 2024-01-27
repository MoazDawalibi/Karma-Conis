import {lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom'
import Loading from './Components/Utils/Loading/Loading';
import Consigne from './Pages/Consigne/Consigne';
import LoadingPage from './Pages/Loading/LoadingPage';
import i18n from 'i18next'; // Make sure this import is correct

const CheckPaymentPage  =  lazy(()=>import('./Pages/paymentRedirect/Page'));
const Page404 = lazy(() => import("./Layout/app/NotFoundPage"))
const SuccessPayment = lazy(() => import("./Pages/SuccessPayment/Page"))
const OrdersPage = lazy(() => import("./Pages/Orders/OrdersPage"))
const Contact = lazy(() => import("./Pages/Contact/Contact"))
const About = lazy(() => import("./Pages/About/About"))
const Products = lazy(() => import("./Pages/Product/Products"))
const Product = lazy(() => import("./Pages/Product/Product"))
const Home  = lazy(() => import("./Pages/Home/Page"))
const CartPage = lazy(() => import("./Pages/Cart/CartPage"))
const Auth = lazy(() => import("./Pages/Auth/Page"))
const SingleOrderPage = lazy(() => import("./Pages/SingleOrder/SingleOrderPage"))
const FavouritePage = lazy(() => import("./Pages/Favourite/FavouritePage"))


const App = () => {

  i18n?.changeLanguage(localStorage?.getItem('language') ?? 'en')

  return (
    <Routes>
      <Route path="*" element={<Suspense fallback={<LoadingPage />}> <Page404 /></Suspense>} />
      <Route path="/auth" element={<Suspense fallback={<LoadingPage />}> <Auth /></Suspense>} />
      <Route path="/" element={<Suspense fallback={<LoadingPage />}> <Home /></Suspense>} />
      <Route path="/product/:id" element={<Suspense fallback={<LoadingPage />}> <Product /></Suspense>} />
      <Route path="/products" element={<Suspense fallback={<LoadingPage />}> <Products /></Suspense>} />
      <Route path="/cart" element={<Suspense fallback={<LoadingPage />}> <CartPage /></Suspense>} />
      <Route path="/about" element={<Suspense fallback={<LoadingPage />}> <About /></Suspense>} />
      <Route path="/contact" element={<Suspense fallback={<LoadingPage />}> <Contact /></Suspense>} />
      <Route path="/single_order" element={<Suspense fallback={<LoadingPage />}> <SingleOrderPage /></Suspense>} />
      {/* <Route path="/consigne" element={<Suspense fallback={<LoadingPage />}> <Consigne /></Suspense>} /> */}
      <Route path="/orders" element={<Suspense fallback={<LoadingPage />}> <OrdersPage /></Suspense>} />
      <Route path="/checkout_payment_online" element={<Suspense fallback={<LoadingPage />}> <CheckPaymentPage /></Suspense>} />
      <Route path="/success_payment" element={<Suspense fallback={<LoadingPage />}> <SuccessPayment /></Suspense>} />
      <Route path="/favourite" element={<Suspense fallback={<LoadingPage />}> <FavouritePage /></Suspense>} />


    </Routes>

        
     
  )
}

export default App