
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
        cerviongroup_optin: 'cervion-group/opt-in-page/index.html',
        cerviongroup_landing: 'cervion-group/landing-page/index.html',
        cerviongroup_questionnaire: 'cervion-group/questionnaire-page/index.html',
        santamaria_optin: 'santa-maria/opt-in-page/index.html',
        santamaria_landing: 'santa-maria/landing-page/index.html',
        santamaria_questionnaire: 'santa-maria/questionnaire-page/index.html',
      },
    },
  },
})
