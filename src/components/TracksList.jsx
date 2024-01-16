import Link from 'next/link'

const TracksList = ({ title, badget, tracks }) => (
  <section className="gap-4 py-6">
    <h3 className="col-span-2 text-3xl font-bold flex flex-row items-center gap-2 text-gray-400">
      {title}
      {badget && <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">
        {badget}
      </span>
      }
    </h3>
    <div className="grid grid-cols-3 gap-4 py-6">
      {tracks.map(({ id, slug, title, excerpt, cover, date, authorAvatar, authorName }) => (
          <Link href={`/tracks/${slug}`} key={id} className="flex flex-col">
            <img src={cover} alt={title} className='rounded' />
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
      ))}
    </div>
  </section>
)

export default TracksList
