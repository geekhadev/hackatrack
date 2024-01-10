import Nav from '@/components/Nav'
import Image from 'next/image'

const Header = () => (
  <header className="bg-green-300 w-full py-2 px-6 flex items-center justify-between text-center">
    <Image src="/logo.png" alt="hero" width="60" height="60" />
    <Nav />
  </header>
)

export default Header
