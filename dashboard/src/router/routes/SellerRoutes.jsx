import { Suspense, lazy } from "react";
const Home = lazy(() => import('../../views/pages/Home'));
const SellerDashboard = lazy(()=> import('../../views/seller/SellerDashboard'))   

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
        ability: ['admin', 'seller']
    },
];