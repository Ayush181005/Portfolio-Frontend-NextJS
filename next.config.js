// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  async headers() {
    return [
      {
        source: '/toaahana',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
    ]
  },
}

module.exports = nextConfig