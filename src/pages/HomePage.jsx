export default function HomePage() {
  return (
    <>
      <section className="home-page">
        <div className="text-center mb-5">
          <h1>Best Home Page EVER</h1>
        </div>
        <div className="row row-cols-1 row-cols-md-2 d-flex align-items-center">
          <div className="col">
            <img
              className="img-fluid"
              src="src/assets/img/placeholder-HomePage.png"
              alt="Home Page Placeholder"
            />
          </div>
          <div className="col">
            <figure>
              <blockquote className="blockquote">
                <p className="fs-1">A well-known quote, contained in a blockquote element.</p>
              </blockquote>
              <figcaption className="blockquote-footer fs-2">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}
