module.exports = {
	webpack(config) {
		config.module.rules.push({
			loader: '@svgr/webpack',
			options: {
				prettier: false,
				svgo: true,
				titleProp: true,
			},
			test: /\.svg$/,
		});

		return config;
	},
};