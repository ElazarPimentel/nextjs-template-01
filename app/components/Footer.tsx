import Container from "./Container";

export default function Footer() {
  return (
    <footer>
      <Container hasBorder align="center">
        <p>
          &copy; {new Date().getFullYear()} NodeJS Template |{" "}
          <span className="legal-text">
            Derechos de Autor Elazar Pimentel según Convenio Internacional de Berna
          </span>
        </p>
      </Container>
    </footer>
  );
} 