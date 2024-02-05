import './globals.css'
import Header from '@/components/Header'

export const metadata = {
  title: 'Hack a Track',
  description:
    'Plataforma web con la información de los tracks educativos de HACK A BOSS',
  openGraph: {
    title: 'Hack a Track',
    description:
      'Plataforma web con la información de los tracks educativos de HACK A BOSS',
    url: 'https://hackatrack.vercel.app/',
    images: [
      {
        url: '/cover.png',
        alt: 'Hack a Track'
      }
    ],
    locale: 'es_ES',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hack a Track',
    description:
      'Plataforma web con la información de los tracks educativos de HACK A BOSS',
    url: 'https://hackatrack.vercel.app/',
    images: [
      {
        url: '/cover.png',
        alt: 'Hack a Track'
      }
    ]
  }
}

export default function RootLayout ({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#121212]">
        <Header />
        {children}
      </body>
    </html>
  )
}
