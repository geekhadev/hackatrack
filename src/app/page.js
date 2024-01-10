import Link from 'next/link'
import MainLayout from '@/components/MainLayout'

export default function Home () {
  return (
    <MainLayout>
      <Link href="/tracks">
        Ver los tracks
      </Link>
    </MainLayout>
  )
}
