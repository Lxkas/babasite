/** @type {import('next').NextConfig} */

const withMDX = require("@next/mdx")({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [],
		rehypePlugins: [],
		// If you use `MDXProvider`, uncomment the following line.
		// providerImportSource: "@mdx-js/react",
	},
});

const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["brahmakumaris.org.au", "images.unsplash.com"],
	},
	i18n: {
		// providing the locales supported by your application
		locales: ["th-TH"],
		defaultLocale: "th-TH",
	},
	defaultLocale: "th-TH",

	pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
};

module.exports = withMDX(nextConfig);
