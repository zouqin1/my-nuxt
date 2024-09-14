// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss' // 此处
  ],
  vite: {
    scss: {
        preprocessorOptions: {
            css: {
                additionalData: '@import "@/assets/style/main.scss"',
            },
        },
    },
  },
  css: [
    '@/assets/style/main.scss',
  ]
})
