import Link from 'next/link'
import Nav from '@/components/Nav'

const Header = () => (
  <header className="w-full max-w-5xl mx-auto py-6 px-6 md:px-0 flex items-center justify-between text-center">
    <Link href="/">
      <img src="/logo-hab-pez.svg" alt="hero" width="100" height="100" className='hover:scale-105 rounded-full transition' />
    </Link>
    <Nav />
  </header>
)

export default Header
