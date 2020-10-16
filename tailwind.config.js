module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: [],
    theme: {
        extend: {
            backgroundImage: theme => ({
                'steam-bg': "url( 'https://steamstore-a.akamaihd.net/public/images/v10/colored_body_top2.png?v=2')",
                'sec-nav-hover': 'linear-gradient(rgb(227, 234, 239) 5%, rgb(199, 213, 224) 95%)',
            }),
            colors: {
                'navy-500': '#171a21',
                'green-steam': '#5c7e10',
                'sec-nav': 'rgba(62, 126, 167, 0.8)',
                'sec-nav-br': '1px solid rgba(16, 21, 25, 0.3)',
                'sec-nav-shadow': '0 0 3px rgba(0, 0, 0, 0.4)',
                'lol': 'rgba(16, 21, 25, 0.3)',
                'page-bg': '#1b2838',
                'search': '#316282'
            },

        },
        boxShadows: {
            'xd': '0 0 3px rgba(0, 0, 0, 0.4)'
        }
    },
    variants: {},
    plugins: [],
}
