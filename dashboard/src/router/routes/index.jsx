import MainLayout from "../../layout/MainLayout";
import { privateRoutes } from "./PrivateRoutes";


export const getRoutes = () => {
    return {
        path: '/',
        element: <MainLayout />,
        children: privateRoutes
    };
};