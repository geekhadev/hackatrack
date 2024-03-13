import Track from '@/components/Track'

const TracksList = ({ title, badget, tracks }) => (
  <section className="gap-4 py-6">
    <h3 className="col-span-2 text-3xl font-bold flex flex-row items-center gap-2 text-gray-400">
      {title}
      {badget && <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">
        {badget}
      </span>
      }
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6">
      {tracks
        .sort((a, b) => a.date > b.date ? -1 : 1)
        .map((track) => <Track track={track} key={track.slug} />)}
    </div>
  </section>
)

export default TracksList
