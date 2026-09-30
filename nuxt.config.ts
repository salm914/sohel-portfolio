// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"
export default defineNuxtConfig({
  css:['~/assets/main.css'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  vite:{
    plugins:[
      tailwindcss()
    ]
  },
  app:{
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
