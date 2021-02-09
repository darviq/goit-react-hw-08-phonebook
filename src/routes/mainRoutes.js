import {lazy} from "react";

const mainRoutes = [
    {
        name: "Register",
        path: "/register",
        exact: true,
        component: lazy(() => import("../components/main/auth/Auth" /* webpackChunkName: "RegisterPage"*/)),
        isPrivate: false,
    },
    {
        name: "Login",
        path: "/login",
        exact: true,
        component: lazy(() => import("../components/main/auth/Auth" /* webpackChunkName: "LoginPage"*/)),
        isPrivate: false,
    },
    {
        name: "Contacts",
        path: "/contacts",
        exact: true,
        component: lazy(() => import("../components/main/contacts/Contacts" /* webpackChunkName: "ContactsPage"*/)),
        isPrivate: true,
    },
];

export default mainRoutes;
