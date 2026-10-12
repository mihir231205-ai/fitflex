export default function SafeImage({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      onError={(e) => {
        e.currentTarget.style.display = 'none'
      }}
    />
  )
}
