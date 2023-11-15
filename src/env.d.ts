/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly STRAPI_URL: string;
}

declare module 'strapi';