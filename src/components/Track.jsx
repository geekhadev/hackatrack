import Link from 'next/link'

const Track = ({
  track: { id, slug, title, excerpt, cover, date, authorAvatar, authorName }
}) => {
  return (
    <Link href={`/tracks/${slug}`} className="group flex flex-col">
      <img
        src={cover}
        alt={title}
        width="330"
        height="170"
        className="rounded-2xl transition group-hover:rotate-1 group-hover:scale-105"
      />
      <dic className="flex flex-col gap-1">
        <h3 className="col-span-2 mt-4 flex flex-row items-center text-balance text-xl font-bold text-gray-200">
          {title}
        </h3>
        <p className="text-balance text-gray-400">{excerpt}</p>
        <div className="flex items-center gap-2">
          {authorAvatar && (
            <img
              className="size-6 rounded-full"
              src={authorAvatar}
              alt={authorName}
            />
          )}
          {date && <p className="text-balance text-gray-400">{authorName}</p>}
          {date && (
            <p className="text-balance text-yellow-500">Incia: {date}</p>
          )}
        </div>
      </dic>
    </Link>
  )
}

export default Track
