/** @type {import('next').NextConfig} */

const nextConfig = {
	async redirects() {
		return [
			{
				source: "/about-me",
				destination: "/about-me/personal-info/bio", // Matched parameters can be used in the destination
				permanent: true,
			},
		];
	},
	images: {
		domains: ["via.placeholder.com"],
	},
};

export default nextConfig;
