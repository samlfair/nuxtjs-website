import { apiEndpoint } from "./sm.json";

export default {
  target: "static",

  /*
   ** Headers of the page
   */
  head: {
    title: "Nuxt + Prismic",
    meta: [
<<<<<<< HEAD
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
=======
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
>>>>>>> master
      {
        hid: "description",
        name: "description",
        content: "Nuxt + Prismic showcase"
      }
    ],
    link: [
<<<<<<< HEAD
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
=======
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      },
>>>>>>> master
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Lato:400,700,900,400italic,700italic"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Lora:400,400italic,700,700italic"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons"
      }
<<<<<<< HEAD
=======
    ],
    script: [
      {
        src:
          "https://cdn.polyfill.io/v2/polyfill.min.js?features=Element.prototype.classList"
      },
      {
        src:
          "https://cdn.jsdelivr.net/npm/focus-visible@5.0.2/dist/focus-visible.min.js"
      }
>>>>>>> master
    ]
  },

  /*
   ** Customize the progress-bar color
   */
<<<<<<< HEAD
  loading: { color: "#fff" },
=======
  loading: {
    color: "#fff"
  },
>>>>>>> master

  /*
   ** Global CSS
   */
<<<<<<< HEAD
  css: ["@/assets/css/resetr.css", "@/assets/css/common.css"],
=======
  css: [
    "vue-essential-slices/src/styles/styles.scss",
    "@/assets/css/resetr.css",
    "@/assets/css/common.css"
  ],
>>>>>>> master

  /*
   ** Plugins to load before mounting the App
   */
<<<<<<< HEAD
  plugins: [{ src: "~/plugins/prismicLinks", ssr: false }],
=======
  plugins: [],
>>>>>>> master

  /*
   ** Nuxt.js modules
   */
<<<<<<< HEAD
  modules: [
    // https://prismic-nuxt.js.org/
    "@nuxtjs/prismic"
  ],

  prismic: {
    endpoint: apiEndpoint,
=======
  modules: [["@nuxtjs/prismic"], ["nuxt-sm"]],
  prismic: {
    endpoint: "https://your-repo-name.cdn.prismic.io/api/v2",
>>>>>>> master
    linkResolver: "@/plugins/link-resolver",
    htmlSerializer: "@/plugins/html-serializer"
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // to transform link with <nuxt-link> for the htmlSerializer
      config.resolve.alias["vue"] = "vue/dist/vue.common";
<<<<<<< HEAD
    }
  },
=======
    },
>>>>>>> master

    transpile: ["vue-slicezone", "nuxt-sm"]
  },
  generate: {
    fallback: "404.html" // Netlify reads a 404.html, Nuxt will load as an SPA
  }
};
