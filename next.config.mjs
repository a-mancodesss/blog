/** @type {import('next').NextConfig} */
const nextConfig = {
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
   images:{
    remotePatterns:[
      {  protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
   }
    ]
}
}

export default nextConfig;
