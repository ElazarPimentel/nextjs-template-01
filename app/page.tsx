import Header from './components/Header';
import Footer from './components/Footer';
import Container from './components/Container';

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      <Header />

      <main id="main-content">
        <Container hasBorder className="main-content">
          <section>
            <h2>Bienvenido</h2>
          </section>
          

          
        </Container>
      </main>
      
      <Footer />
    </>
  );
}
