import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const siteUrl = 'https://wemidia.com.br'

export const metadata: Metadata = {
  title: 'Produção Audiovisual Estratégica para Empresas | WeMídia',
  description:
    'Estruturamos comunicação institucional, treinamentos corporativos e motion branding com foco em posicionamento, clareza e resultado para empresas.',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Produção Audiovisual Estratégica para Empresas | WeMídia',
    description:
      'Estruturamos comunicação institucional, treinamentos corporativos e motion branding com foco em posicionamento, clareza e resultado para empresas.',
    url: siteUrl,
    siteName: 'WeMídia',
    type: 'website',
    locale: 'pt_BR',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'WeMídia - Produção Audiovisual Estratégica para Empresas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Produção Audiovisual Estratégica para Empresas | WeMídia',
    description:
      'Estruturamos comunicação institucional, treinamentos corporativos e motion branding com foco em posicionamento, clareza e resultado para empresas.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#070B14',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

const jsonLdOrganization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'WeMídia',
  url: siteUrl,
  logo: `${siteUrl}/images/logo-wemidia.png`,
  description:
    'Produtora audiovisual estratégica especializada em comunicação corporativa, treinamentos e motion branding para empresas.',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+55-61-98129-7057',
    contactType: 'sales',
    availableLanguage: 'Portuguese',
  },
}

const jsonLdServices = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  provider: {
    '@type': 'Organization',
    name: 'WeMídia',
  },
  serviceType: [
    'Produção Audiovisual Estratégica',
    'Comunicação Corporativa',
    'Treinamentos Corporativos',
    'Motion Branding',
  ],
  areaServed: {
    '@type': 'Country',
    name: 'Brazil',
  },
  description:
    'Estruturamos comunicação institucional, treinamentos corporativos e motion branding com foco em posicionamento, clareza e resultado para empresas.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="preconnect"
          href="https://api.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdOrganization),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdServices),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K24NMGFL"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
        <Analytics />
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-K24NMGFL');
            `,
          }}
        />
      </body>
    </html>
  )
}
