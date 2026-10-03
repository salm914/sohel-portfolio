// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"
export default defineNuxtConfig({
  css:['~/assets/main.css','@fortawesome/fontawesome-free/css/all.min.css'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  vite:{
    plugins:[
      tailwindcss(),
    ]
  },
  app:{
    baseURL: '/sohel-portfolio/',
    head:{
      title:'Sohel Akram',
      link:[
        {
        rel:'icon',
        type:"image/x-icon",
        href:'sohel-favicon.png'
        }
      ]
    },
  }
})
