export default function Home() {
  return (
    <>
      {/* HERO */}
      <section style={{ textAlign: "center" }}>
        <h1>BMC MILLY</h1>
        <p style={{ marginTop: 10 }}>
          Underrated but never overlooked.
        </p>

        <div style={{ marginTop: 30 }}>
          <a className="btn" href="#">Spotify</a>
          <a className="btn" href="#">Apple Music</a>
          <a className="btn" href="#">YouTube</a>
        </div>
      </section>

      {/* ABOUT */}
      <section>
        <h2>About BMC Milly</h2>
        <p>
          From the struggle to the spotlight. Turning dreams into reality.
          Hustle into hits.
        </p>
      </section>

      {/* RELEASES */}
      <section>
        <h2>Latest Releases</h2>

        <div className="grid">
          <div className="card">
            <img src="/albums/underrated.jpg" />
            <p>Underrated</p>
          </div>

          <div className="card">
            <img src="/albums/takeover.jpg" />
            <p>Take Over</p>
          </div>
        </div>
      </section>

      {/* MERCH */}
      <section>
        <h2>Mente Millionaria</h2>
        <p>Street luxury mindset. Merch dropping soon.</p>

        <div className="grid">
          <div className="card">
            <img src="/merch/hoodie.jpg" />
            <p>Mente Millionaria Hoodie</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ textAlign: "center" }}>
        <h2>Booking & Features</h2>
        <p>bmcMillybooking@gmail.com</p>
      </section>
    </>
  );
}
