/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
       remotePatterns: [
           //protocol, hostname, port, and pathname 
           {
            protocol: 'https',
            hostname: 'www.weatherstationforhome.com',
            port: '',
            pathname: '/wp-content/uploads/2020/03/404.jpg',
            },
       ],
    },
}
