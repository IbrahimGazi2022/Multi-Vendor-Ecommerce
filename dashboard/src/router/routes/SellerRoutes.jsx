import { Suspense, lazy } from "react";
const Home = lazy(() => import('../../views/pages/Home'));

export const sellerRoutes = [
    {
        path: '/',
        element:
            <Suspense>
                <Home />
            </Suspense>
        ,
        ability: ['admin', 'seller']
    }
];