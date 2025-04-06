import ThemeToggle from "./ThemeToggle";
import Container from "./Container";

export default function Header() {
  return (
    <header>
      <Container hasBorder className="header-content">
        <h1>H1 Elazar's NodeJS Template</h1>
        <div aria-live="polite">
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
} 