import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/partials/**/*',
  ],
  darkMode: 'class',
  theme: {
    screens: {
        xs: '480px',
        sm: '640px',
        // => @media (min-width: 640px) { ... }
        md: '768px',
        // => @media (min-width: 768px) { ... }
        lg: '1024px',
        // => @media (min-width: 1024px) { ... }
        xl: '1280px',
        // => @media (min-width: 1280px) { ... }
        '2xl': '1536px',
        '3xl': '1600px',
    },
    container: {
        center: true,
        padding: '15px',
        screens: {
            sm: '640px', // Set max-width for small screens (e.g., mobile)
            md: '768px', // Set max-width for medium screens (e.g., tablet)
            lg: '1024px', // Set max-width for large screens (e.g., laptop)
            xl: '1320px', // Set max-width for extra-large screens (e.g., desktop)
            xxl: '1536px',
            xxxl: '1600px',
        },
    },
    backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    },
    colors: {
        transparent: 'rgba(255, 255, 255, 0)',
        white: '#fff',
        blue: '#0000ee',
        blueSoft: '#6366f1',
        purple: '#7e5bef',
        pink: '#ff49db',
        orange: '#ff7849',
        green: '#13ce66',
        yellow: '#ffc82c',
        black: '#000',
        blackSoft: '#111927',
        gray: {
            100: '#f7fafc',
            300: '#f5f5f5 ',
            600: '#444444',
            900: '#1a202c',
        },
    },
    fontFamily: {
        notoRegular: ['Noto-Regular', 'sans-serif'],
        notoMedium: ['Noto-Medium', 'sans-serif'],
        notoBold: ['Noto-Bold', 'sans-serif'],
        noto: ['Noto-Medium', 'sans-serif'],

        railwayLight: ['Railway-Light', 'sans-serif'],
        railwayMedium: ['Railway-Medium', 'sans-serif'],
        railwayBold: ['Railway-Bold', 'sans-serif'],

        robotoLight: ['Roboto-Light', 'sans-serif'],
        robotoRegular: ['Roboto-Regular', 'sans-serif'],
        robotoMedium: ['Roboto-Medium', 'sans-serif'],
        robotoBold: ['Roboto-Bold', 'sans-serif'],
    },
    fontSize: {
        8: 'var(--font-8)',
        10: 'var(--font-10)',
        12: 'var(--font-12)',
        14: 'var(--font-14)',
        16: 'var(--font-16)',
        18: 'var(--font-18)',
        22: 'var(--font-22)',
        26: 'var(--font-26)',
        30: 'var(--font-30)',
        34: 'var(--font-34)',
        38: 'var(--font-38)',
    },
    fontWeight: {
        100: '100',
        200: '200',
        300: '300',
        400: '400',
        500: '500',
        600: '600',
        700: '700',
        800: '800',
    },
    lineHeight: {
        16: '16px',
        24: '24px',
        27: '27px',
        35: '35px',
        45: '45px',
    },
    letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.1em',
    },
    textIndent: {
        '128': '32rem',
    },
    spacing: {
        0: '0',
        1: '1px',
        2: 'var(--space-2)',
        3: 'var(--space-3)',
        4: 'var(--space-4)',
        5: 'var(--space-5)',
        6: 'var(--space-6)',
        7: 'var(--space-7)',
        8: 'var(--space-8)',
        9: 'var(--space-9)',
        10: 'var(--space-10)',
        12: 'var(--space-12)',
        14: 'var(--space-14)',
        16: 'var(--space-16)',
        20: 'var(--space-20)',
        30: 'var(--space-30)',
        40: 'var(--space-40)',
        60: 'var(--space-60)',
    },
    extend: {
        borderRadius: {
            none: '0',
            sm: '0.125rem',
            DEFAULT: '0.25rem',
            md: '0.375rem',
            lg: '0.5rem',
            full: '9999px',
        },
        borderWidth: {
            DEFAULT: '1px',
            '0': '0',
            '2': '2px',
            '3': '3px',
            '4': '4px',
            '6': '6px',
            '8': '8px',
        },
        gridTemplateColumns: {
            '16': 'repeat(16, minmax(0, 1fr))',
            footer: '200px minmax(900px, 1fr) 100px',
        },

        backgroundImage: {
            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
        blur: {
            xs: '2px',
        },
        brightness: {
            25: '.25',
            175: '1.75',
        },
        contrast: {
            25: '.25',
        },
        dropShadow: {
            '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
            '4xl': ['0 35px 35px rgba(0, 0, 0, 0.25)', '0 45px 65px rgba(0, 0, 0, 0.15)'],
        },
        grayscale: {
            50: '50%',
        },
        hueRotate: {
            '-270': '-270deg',
            270: '270deg',
        },
        zIndex: {
            '100': '100',
        },
        keyframes: {
            slideDown: {
                from: { height: '0' },
                to: { height: '70px' },
            },
            slideUp: {
                from: { height: '70px' },
                to: { height: '0' },
            },
            overlayShow: {
                from: { opacity: '0' },
                to: { opacity: '1' },
            },
            contentShow: {
                from: { opacity: '0', transform: 'translate(-50%, -48%) scale(0.96)' },
                to: { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' },
            },
        },
        animation: {
            slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
            slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
            overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
            contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        },
    },
},
plugins: [require('tailwind-scrollbar-hide')],
}
export default config
