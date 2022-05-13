const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Arial Nova"', ...defaultTheme.fontFamily.sans]
      },
      screens: {
        lg: { max: '1045px' },
        md: { max: '767px' },
        sm: { max: '495px' },
        xs: { max: '413px' },
      },
      colors: {
        accent: '#FEC110',
        separator: '#EEECEC',
        primary: '#2C2C2C',
        secondary: '#989898',
        quaternary: '#313232',
        separator_primary: '#B6B6B6',
        tertiary: '#E4E4E4',
        current: 'currentColor'
      },
      fontSize: {
        headline0: ['90px', '81px'],
        headline1: ['67px', '64px'],
        headline2: ['51px', '54px'],
        headline3: ['38px', '42px'],
        headline4: ['21px', '25px'],
        description: ['28px', '34px'],
        link: ['15px', '18px'],
        text1: ['16px', '22px'],
        text3: ['12px', '24px'],
        tablet0: ['68px', '61px'],
        tablet1: ['44px', '42px'],
        tablet_description: ['24px', '29px'],
        mobile0: ['58px', '52px'],
        mobile1: ['34px', '32px'],
        mobile2: ['28px', '29px'],
        mobile3: ['10px', '20px'],
        mobile4: ['18px', '22px']
      }
    },
  },
  plugins: [],
}
