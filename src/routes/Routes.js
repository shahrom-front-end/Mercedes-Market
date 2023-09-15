import { lazy } from "react";


export const Layout=lazy(()=>import ("../layout/Layout.jsx"))
export const Home=lazy(()=>import ("../pages/Home/Home.jsx"))
export const About=lazy(()=>import ("../pages/About/About.jsx"))
export const Services=lazy(()=>import ("../pages/Services/Services.jsx"))
export const Fleets=lazy(()=>import ("../pages/Fleets/Fleets.jsx"))
export const Nothing=lazy(()=>import ("../pages/Nothing/Nothing.jsx"))