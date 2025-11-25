
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
        ubuntuprime_optin: 'ubuntu-prime/opt-in-page/index.html',
        ubuntuprime_landing: 'ubuntu-prime/landing-page/index.html',
        ubuntuprime_questionnaire: 'ubuntu-prime/questionnaire-page/index.html',
        cerviogroup_optin: 'cervio-group/opt-in-page/index.html',
        cerviogroup_landing: 'cervio-group/landing-page/index.html',
        cerviogroup_questionnaire: 'cervio-group/questionnaire-page/index.html',
        santamaria_optin: 'santa-maria/opt-in-page/index.html',
        santamaria_landing: 'santa-maria/landing-page/index.html',
        santamaria_questionnaire: 'santa-maria/questionnaire-page/index.html',
      },
    },
  },
})
