module.exports = {
  mode: 'jit',
  purge: {
    content: ["./src/**/*.svelte", "./src/**/*.css"],
    options: {
      safelist: [
        /data-theme$/,
      ]
    },
  },

  // or 'media' or 'class'
  darkMode: false,

  theme: {
    extend: {},
  },

  variants: {
    extend: {},
  },

  plugins: [require('daisyui')],

  daisyui: {
    styled: true,
    themes: ['cupcake'],
    base: true,
    utils: true,
    logs: true,
    rtl: false,  
  }
};
