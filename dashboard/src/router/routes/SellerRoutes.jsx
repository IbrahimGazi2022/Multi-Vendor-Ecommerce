import { Suspense, lazy } from "react";
const Home = lazy(() => import('../../views/pages/Home'));
const SellerDashboard = lazy(() => import('../../views/seller/SellerDashboard'));
const AddProduct = lazy(() => import('../../views/seller/AddProduct'));
const Products = lazy(() => import('../../views/seller/Products'));
const DiscountProducts = lazy(() => import('../../views/seller/DiscountProducts'));

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
        ability: ['seller']
    },
    {
        path: '/seller/dashboard/add-product',
        element:
            <Suspense>
                <AddProduct />
            </Suspense>
        ,
        ability: ['seller']
    },
    {
        path: '/seller/dashboard/products',
        element:
            <Suspense>
                <Products />
            </Suspense>
        ,
        ability: ['seller']
    },
    {
        path: '/seller/dashboard/discount-product',
        element:
            <Suspense>
                <DiscountProducts />
            </Suspense>
        ,
        ability: ['seller']
    },
];