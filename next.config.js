module.exports = {
    webpack: (config, { isServer }) => {
        // Fixes npm packages that depend on `fs` module
        if (!isServer) {
            config.node = {
                fs: 'empty'
            }
        }

        return config
    },
    env: {
        API_KEY: 'AIzaSyBLF4iEDjnWFmKrhEtIetO5qRT2aKQqO4o',
    },
}