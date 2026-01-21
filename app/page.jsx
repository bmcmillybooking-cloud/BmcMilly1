export default function Home() {
  return (
    <main style={styles.main}>
      <section style={styles.hero}>
        <h1 style={styles.title}>Book With BMC Milly</h1>

        <p style={styles.subtitle}>
          Professional services. Simple booking. Real results.
        </p>

        <button style={styles.button}>
          Book an Appointment
        </button>
      </section>

      <section style={styles.info}>
        <h2 style={styles.sectionTitle}>What We Do</h2>
        <p style={styles.text}>
          BMC Milly provides professional, reliable services with an easy and
          straightforward booking experience. Choose your time, book instantly,
          and we’ll take care of the rest.
        </p>
      </section>

      <footer style={styles.footer}>
        <p style={styles.footerText}>
          © {new Date().getFullYear()} BMC Milly. All rights reserved.
        </p>
      </footer>
    </main>
  );
}

const styles = {
  main: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#ffffff",
    color: "#111111",
  },
  hero: {
    padding: "80px 20px",
    textAlign: "center",
  },
  title: {
    fontSize: "3rem",
    marginBottom: "16px",
  },
  subtitle: {
    fontSize: "1.2rem",
    marginBottom: "32px",
    color: "#555555",
  },
  button: {
    padding: "14px 28px",
    fontSize: "1rem",
    fontWeight: "bold",
    backgroundColor: "#000000",
    color: "#ffffff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  info: {
    padding: "40px 20px",
    maxWidth: "800px",
    margin: "0 auto",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: "2rem",
    marginBottom: "16px",
  },
  text: {
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "#444444",
  },
  footer: {
    padding: "20px",
    textAlign: "center",
    borderTop: "1px solid #e5e5e5",
  },
  footerText: {
    fontSize: "0.9rem",
    color: "#777777",
  },
};
