module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: [],
    theme: {
        extend: {
            colors: {
                'navy-500': '#171a21',
                'green-steam': '#5c7e10',
                'sec-nav': 'rgba(62, 126, 167, 0.8)',
                'sec-nav-br': '1px solid rgba(16, 21, 25, 0.3)',
                'sec-nav-shadow': '0 0 3px rgba(0, 0, 0, 0.4)',
                'lol': 'rgba(16, 21, 25, 0.3)'
            },

        },
        boxShadows: {
            'xd': '0 0 3px rgba(0, 0, 0, 0.4)'
        }
    },
    variants: {},
    plugins: [],
}
