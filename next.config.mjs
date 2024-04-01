/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverComponentsExternalPackages: [
			'conekta'
		]
	}
};

export default nextConfig;
