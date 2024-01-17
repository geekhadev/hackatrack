import Link from 'next/link'

const Track = ({ track: { id, slug, title, excerpt, cover, date, authorAvatar, authorName } }) => {
  return (
    <Link href={`/tracks/${slug}`} key={id} className="flex flex-col group">
      <img src={cover} alt={title} width="330" height="170" className='rounded-2xl group-hover:scale-105 group-hover:rotate-1 transition' />
      <dic className='flex flex-col gap-1'>
        <h3 className="col-span-2 text-xl mt-4 font-bold flex flex-row items-center text-gray-200 text-balance">
          {title}
        </h3>
        <p className="text-gray-400 text-balance">{excerpt}</p>
        <div className='flex gap-2 items-center'>
          {authorAvatar && <img className="size-6 rounded-full" src={authorAvatar} alt={authorName} />}
          {date && <p className="text-gray-400 text-balance">{authorName}</p>}
          {date && <p className="text-yellow-500 text-balance">Incia: {date}</p>}
        </div>
      </dic>
    </Link>
  )
}

export default Track
