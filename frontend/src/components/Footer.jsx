function Footer() {
  return (
    <footer
      style={{
        background: "#333",
        color: "white",
        textAlign: "center",
        padding: "1rem",
        marginTop: "2rem",
      }}
    >
      <p>© {new Date().getFullYear()} Course & Career Advisor</p>
    </footer>
  );
}

export default Footer;
