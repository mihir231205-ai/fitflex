import { Link } from 'react-router-dom'
import { IMAGES } from '../data/images'

export default function About() {
  return (
    <>
      <section
        className="page-hero"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(10,10,10,.4), rgba(10,10,10,.88)), url(${IMAGES.about})`,
        }}
      >
        <p className="eyebrow">About FitFlex</p>
        <h1>A quieter way to get serious about training.</h1>
      </section>
      <section className="section about">
        <article className="panel">
          <h2>The idea</h2>
          <p>
            Most people do not need more noise. They need a clear map of their body, a place to train, and honest
            information about food. FitFlex is built around that journey: choose a body model, tap a muscle, pick
            home or gym, then follow a video.
          </p>
        </article>
        <article className="panel">
          <h2>What you can do</h2>
          <ul className="check-list">
            <li>Explore Male and Female interactive muscle maps</li>
            <li>Calculate BMI with an immediate category card</li>
            <li>Search everyday foods for healthier recipes</li>
            <li>Inspect calories and macros on nutrition cards</li>
            <li>Lock a fitness goal and see matching training + diet notes</li>
          </ul>
        </article>
        <article className="panel">
          <h2>Built to grow</h2>
          <p>
            The interface uses structured sample data for exercises, recipes, and nutrition so live APIs can be
            connected later without redesigning the product.
          </p>
          <Link className="btn btn-gold" to="/">
            Start on the homepage
          </Link>
        </article>
      </section>
    </>
  )
}
