import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/Nav'

const Header = () => (
  <header className="w-full max-w-5xl mx-auto py-6 px-6 md:px-0 flex items-center justify-between text-center">
    <Link href="/">
    <Image src="/logo-hab-pez.svg" alt="hero" width="120" height="120" />
    </Link>
    <Nav />
  </header>
)

export default Header
