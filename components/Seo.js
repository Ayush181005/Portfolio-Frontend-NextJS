import Head from 'next/head'

const SITE_NAME = 'Ayush Singh'
const SITE_URL = 'https://www.theayush.in'
const DEFAULT_IMAGE = `${SITE_URL}/gallery/26.jpg`

export default function Seo({
  title,
  description,
  path = '',
  image = DEFAULT_IMAGE,
  noIndex = false,
  keywords,
  type = 'website',
}) {
  const url = `${SITE_URL}${path}`

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={SITE_NAME} />
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />
      <link rel="canonical" href={url} />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  )
}