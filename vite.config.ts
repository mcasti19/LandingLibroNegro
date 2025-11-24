
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        ubuntu_optin: 'ubuntu/opt-in-page/index.html',
        ubuntu_landing: 'ubuntu/landing-page/index.html',
        ubuntu_questionnaire: 'ubuntu/questionnaire-page/index.html',
        cervio_optin: 'cervio/opt-in-page/index.html',
        cervio_landing: 'cervio/landing-page/index.html',
        cervio_questionnaire: 'cervio/questionnaire-page/index.html',
        dinasty_optin: 'dinasty/opt-in-page/index.html',
        dinasty_landing: 'dinasty/landing-page/index.html',
        dinasty_questionnaire: 'dinasty/questionnaire-page/index.html',
      },
    },
  },
})
