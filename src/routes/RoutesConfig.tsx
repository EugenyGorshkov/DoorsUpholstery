import { AboutPage } from "@/containers/AboutPage";
import { CatalogPage } from "@/containers/CatalogPage";
import { ContactsPage } from "@/containers/ContactsPage";
import { EliteGalleryPage } from "@/containers/EliteGalleryPage";
import { GalleryPage } from "@/containers/GalleryPage";
import { HomePage } from "@/containers/HomePage";
import { LocksPage } from "@/containers/LocksPage";
import { PricePage } from "@/containers/PricePage";
import { ServicesPage } from "@/containers/ServicesPage";
import { WallPage } from "@/containers/WallPage";

export const RoutesConfig = [
    {
        path: '/',
        element: <HomePage/>
    },
    {
        path: '/price',
        element: <PricePage />
    },
    {
        path: '/services',
        element: <ServicesPage />
    },
    {
        path: '/catalog',
        element: <CatalogPage />
    },
    {
        path: '/gallery',
        element: <GalleryPage />
    },
    {
        path: '/elitegallery',
        element: <EliteGalleryPage />
    },
    {
        path: '/locks',
        element: <LocksPage />
    },
    {
        path: '/wall',
        element: <WallPage />
    },
    {
        path: '/about',
        element: <AboutPage />
    },
    {
        path: '/contacts',
        element: <ContactsPage />
    },

]