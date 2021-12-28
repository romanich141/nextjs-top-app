module.exports = {
	webpack(config, options) {
		config.module.rules.push({
			loader: '@svgr/webpack',
			issuer: /\.(js|ts)x?$/,
			options: {
				prettier: false,
				svgo: true,
				svgoConfig: {
					plugins: [{ 
						name: "preset-default",
						params: {
							override: {
								removeViweBox: false,
							}
						} 
					}],
				},
				titleProp: true,
			},
			test: /\.svg$/,
		});

		return config;
	},
};