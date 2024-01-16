import Link from 'next/link'

const NavLink = ({ href, label }) => {
  return (
    <Link href={href} className="text-gray-100 hover:text-yellow-400 text-2xl">
      {label}
    </Link>
  )
}

const Nav = () => {
  return (
    <nav className='flex flex-row gap-4'>
      <NavLink href="/" label='Inicio' />
      <NavLink href="/tracks/completed" label='Tracks completados' />
    </nav>
  )
}

export default Nav
