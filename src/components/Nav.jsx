import Link from 'next/link'

const Nav = () => {
  return (
    <nav className='flex flex-row gap-3'>
      <Link href="/" className="hover:text-red-400">Home</Link>
      <Link href="/tracks" className="hover:text-red-400">Tracks</Link>
    </nav>
  )
}

export default Nav
