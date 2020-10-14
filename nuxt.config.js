export default {
	// Global page headers (https://go.nuxtjs.dev/config-head)
	head: {
		title: "Basketball Dashboard",
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ hid: "description", name: "description", content: "" }
		],
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
	},

	// Global CSS (https://go.nuxtjs.dev/config-css)
	css: [],

	// Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
	plugins: [
		"~/plugins/Service.ts",
		{ src: "~/plugins/ApexChart.ts", mode: "client" },
		{ src: "~/plugins/KProgress.js", ssr: false }
	],

	// Auto import components (https://go.nuxtjs.dev/config-components)
	components: true,

	// Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
	buildModules: [
		// https://go.nuxtjs.dev/typescript
		"@nuxt/typescript-build",
		"@nuxtjs/svg"
	],

	// Modules (https://go.nuxtjs.dev/config-modules)
	modules: [],

	// Build Configuration (https://go.nuxtjs.dev/config-build)
	build: {
		transpile: [
			"vue-svg-map",
			"@svg-maps/usa.counties",
			"vue-apexcharts",
			"apexcharts",
			"k-progress"
		]
	}
};
