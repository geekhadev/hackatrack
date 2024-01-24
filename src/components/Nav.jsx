import Link from 'next/link'

const NavLink = ({ href, label }) => {
  return (
    <Link href={href} className="text-gray-100 rounded-full px-3 py-2 transition hover:text-yellow-400">
      {label}
    </Link>
  )
}

const Nav = () => {
  return (
    <nav className='flex flex-row gap-2 border border-white/10 bg-white/5 rounded-full px-4'>
      <NavLink href="/" label='Inicio' />
      <NavLink href="/tracks/completed" label='Tracks pasados' />
    </nav>
  )
}

export default Nav
