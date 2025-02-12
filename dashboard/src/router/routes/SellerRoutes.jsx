import { Suspense, lazy } from "react";
const Home = lazy(() => import('../../views/pages/Home'));
const SellerDashboard = lazy(() => import('../../views/seller/SellerDashboard'));
const AddProduct = lazy(() => import('../../views/seller/AddProduct'));
const Products = lazy(() => import('../../views/seller/Products'));
const DiscountProducts = lazy(() => import('../../views/seller/DiscountProducts'));
const Orders = lazy(() => import('../../views/seller/Orders'));
const Payments = lazy(() => import('../../views/seller/Payments'));

export const sellerRoutes = [
    {
        path: '/',
        element:
            <Suspense>
                <Home />
            </Suspense>
        ,
        ability: ['admin', 'seller']
    },
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
];