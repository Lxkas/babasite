/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["brahmakumaris.org.au", "images.unsplash.com"],
	},
	i18n: {
		// providing the locales supported by your application
		locales: ["en-US", "th-TH"],
		//  default locale used when the non-locale paths are visited
		defaultLocale: "en-US",
	},
};

module.exports = nextConfig;
