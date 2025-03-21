import { Suspense, lazy } from "react";
const SellerDashboard = lazy(() => import('../../views/seller/SellerDashboard'));
const AddProduct = lazy(() => import('../../views/seller/AddProduct'));
const Products = lazy(() => import('../../views/seller/Products'));
const DiscountProducts = lazy(() => import('../../views/seller/DiscountProducts'));
const Orders = lazy(() => import('../../views/seller/Orders'));
const Payments = lazy(() => import('../../views/seller/Payments'));
const SellerToAdmin = lazy(() => import('../../views/seller/SellerToAdmin'));
const SellerToCustomer = lazy(() => import('../../views/seller/SellerToCustomer'));
const Profile = lazy(() => import('../../views/seller/Profile'));
const EditProduct = lazy(() => import('../../views/seller/EditProduct'));
const OrderDetails = lazy(() => import('../../views/seller/OrderDetails'));

    export const sellerRoutes = [
        {
        path: '/seller/dashboard',
        element:
            <Suspense>
                <SellerDashboard />
            </Suspense>
        ,
        role: 'seller',
        status: 'active'
    },
    {
        path: '/seller/dashboard/add-product',
        element:
            <Suspense>
                <AddProduct />
            </Suspense>
        ,
        role: 'seller',
        status: 'active'
    },
    {
        path: '/seller/dashboard/products',
        element:
            <Suspense>
                <Products />
            </Suspense>
        ,
        role: 'seller',
        status: 'active'
    },
    {
        path: '/seller/dashboard/discount-product',
        element:
            <Suspense>
                <DiscountProducts />
            </Suspense>
        ,
        role: 'seller',
        status: 'active'
    },
    {
        path: '/seller/dashboard/orders',
        element:
            <Suspense>
                <Orders />
            </Suspense>
        ,
        role: 'seller',
        ability: ['active', 'deactive']
    },
    {
        path: '/seller/dashboard/payments',
        element:
            <Suspense>
                <Payments />
            </Suspense>
        ,
        role: 'seller',
        status: 'active'
    },
    {
        path: '/seller/dashboard/chat-support',
        element:
            <Suspense>
                <SellerToAdmin />
            </Suspense>
        ,
        role: 'seller',
        status: 'active'
    },
    {
        path: '/seller/dashboard/chat-customer/:customerId',
        element:
            <Suspense>
                <SellerToCustomer />
            </Suspense>
        ,
        role: 'seller',
        status: 'active'
    },
    {
        path: '/seller/dashboard/chat-customer',
        element:
            <Suspense>
                <SellerToCustomer />
            </Suspense>
        ,
        role: 'seller',
        status: 'active'
    },
    {
        path: '/seller/dashboard/profile',
        element:
            <Suspense>
                <Profile />
            </Suspense>
        ,
        role: 'seller',
        status: 'active'
    },
    {
        path: '/seller/dashboard/edit-product/:productId',
        element:
            <Suspense>
                <EditProduct />
            </Suspense>
        ,
        role: 'seller',
        status: 'active'
    },
    {
        path: '/seller/dashboard/order/details/:orderId',
        element:
            <Suspense>
                <OrderDetails />
            </Suspense>
        ,
        role: 'seller',
        status: 'active'
    },

];