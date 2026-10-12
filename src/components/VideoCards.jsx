export default function VideoCards({ items, emptyText = 'No videos found.' }) {
  if (!items?.length) {
    return <p className="muted">{emptyText}</p>
  }

  return (
    <div className="video-grid">
      {items.map((item) => (
        <article key={item.id} className="video-card">
          <div className="video-frame">
            <iframe
              title={item.name || item.title}
              src={`https://www.youtube.com/embed/${item.youtubeId}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="card-body">
            <div className="card-meta">
              {item.difficulty && <span className={`tag tag-${item.difficulty.toLowerCase()}`}>{item.difficulty}</span>}
              {item.duration && <span className="tag">{item.duration}</span>}
              {item.time && <span className="tag">{item.time}</span>}
              {item.equipment && <span className="tag">{item.equipment}</span>}
            </div>
            <h3>{item.name || item.title}</h3>
            <p>{item.instructions || item.description}</p>
          </div>
        </article>
      ))}
    </div>
  )
}
