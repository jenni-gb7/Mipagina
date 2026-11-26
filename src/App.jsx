import "./App.css";

const personajes = [
  {
    nombre: "Navier",
    rol: "La emperatriz",
    descripcion: "Elegante, inteligente y determinada. Nunca pierde su dignidad.",
    clase: "navier",
    simbolo: "♛",
  },
  {
    nombre: "Heinrey",
    rol: "El príncipe del Imperio Occidental",
    descripcion: "Un príncipe encantador, misterioso y profundamente enamorado.",
    clase: "heinrey",
    simbolo: "♔",
  },
  {
    nombre: "Sovieshu",
    rol: "El emperador",
    descripcion: "El hombre que puso en riesgo su matrimonio y su imperio.",
    clase: "sovieshu",
    simbolo: "♕",
  },
  {
    nombre: "Rashta",
    rol: "La concubina",
    descripcion: "Una mujer cuya llegada cambiará el destino de la corte.",
    clase: "rashta",
    simbolo: "❀",
  },
];

function App() {
  return (
    <div className="pagina">

      {/* NAVBAR */}
      <header className="navbar">
        <a href="#inicio" className="logo">
          Imperial <span>Archives</span>
        </a>

        <nav>
          <a href="#inicio">Inicio</a>
          <a href="#historia">Historia</a>
          <a href="#personajes">Personajes</a>
          <a href="#universo">Universo</a>
        </nav>

        <a href="#historia" className="nav-boton">
          Explorar historia
        </a>
      </header>

      {/* PORTADA */}
      <section className="hero" id="inicio">
        <div className="hero-fondo"></div>

        <div className="hero-contenido">
          <p className="etiqueta">
            ✧ UNA HISTORIA DE AMOR, PODER Y TRAICIÓN ✧
          </p>

          <h1>
            THE REMARRIED
            <br />
            <span>EMPRESS</span>
          </h1>

          <p className="hero-descripcion">
            Una emperatriz que perdió su matrimonio,
            pero jamás su dignidad. Una historia de
            nuevos comienzos, decisiones y un destino
            que ella misma eligió.
          </p>

          <div className="hero-botones">
            <a href="#historia" className="boton-principal">
              Descubrir la historia
            </a>

            <a href="#personajes" className="boton-secundario">
              Conocer personajes
            </a>
          </div>

          <div className="hero-frase">
            Acepto el divorcio. Y solicito la aprobación de mi nuevo matrimonio.
          </div>
        </div>

        <div className="hero-decoracion">♛</div>
      </section>

      {/* HISTORIA */}
      <section className="historia seccion" id="historia">

        <div className="historia-imagen">
          <div className="historia-decoracion">
            ♛
            <p>THE REMARRIED EMPRESS</p>
            <span>Una historia de dignidad y nuevos comienzos</span>
          </div>
        </div>

        <div className="historia-texto">
          <p className="subtitulo">EL DESTINO DE UNA EMPERATRIZ</p>

          <h2>
            No nació para
            <br />
            <span>ser reemplazada.</span>
          </h2>

          <p>
            Navier siempre fue la emperatriz perfecta. Inteligente,
            preparada y respetada, dedicó su vida a gobernar junto
            a su esposo.
          </p>

          <p>
            Sin embargo, cuando el emperador decide divorciarse
            de ella para casarse con otra mujer, Navier toma una
            decisión que cambiará el destino de todos.
          </p>

          <a href="#universo" className="texto-link">
            Explorar su universo →
          </a>
        </div>

      </section>

      {/* PERSONAJES */}
      <section className="personajes seccion" id="personajes">

        <div className="encabezado-seccion">
          <p className="subtitulo">LA CORTE IMPERIAL</p>

          <h2>Personajes</h2>

          <p>
            Cada personaje guarda una historia, un secreto
            y un papel dentro del destino imperial.
          </p>
        </div>

        <div className="personajes-grid">

          {personajes.map((personaje) => (
            <article
              className={`personaje-card ${personaje.clase}`}
              key={personaje.nombre}
            >

              <div className="personaje-imagen">
                <span>{personaje.simbolo}</span>
              </div>

              <div className="personaje-info">
                <p className="personaje-rol">
                  {personaje.rol}
                </p>

                <h3>{personaje.nombre}</h3>

                <p>{personaje.descripcion}</p>
              </div>

            </article>
          ))}

        </div>
      </section>

      {/* UNIVERSO */}
      <section className="universo seccion" id="universo">

        <div className="encabezado-seccion">
          <p className="subtitulo">ADÉNTRATE EN SU UNIVERSO</p>

          <h2>Una historia, diferentes formas de vivirla</h2>
        </div>

        <div className="universo-grid">

          <article className="universo-card novela">
            <p>01 / LITERATURA</p>

            <h3>La novela</h3>

            <span>
              Descubre la historia original, sus emociones,
              acontecimientos y detalles.
            </span>
          </article>

          <article className="universo-card webtoon">
            <p>02 / ILUSTRACIÓN</p>

            <h3>El Webtoon</h3>

            <span>
              Explora el universo visual, los personajes
              y los momentos inolvidables.
            </span>
          </article>

          <article className="universo-card drama">
            <p>03 / ADAPTACIONES</p>

            <h3>Drama & Anime</h3>

            <span>
              Conoce las adaptaciones audiovisuales
              y sus novedades.
            </span>
          </article>

        </div>
      </section>

      {/* FRASE FINAL */}
      <section className="cita">
        <span>❦</span>

        <h2>
          A veces, perder una corona
          <br />
          significa encontrar tu propio reino.
        </h2>

        <p>THE REMARRIED EMPRESS · IMPERIAL ARCHIVES</p>
      </section>

      {/* FOOTER */}
      <footer>
        <p>Imperial Archives ♛</p>

        <span>
          Una página de fans inspirada en The Remarried Empress.
        </span>

        <p className="footer-final">
          Hecha con amor por los amantes del drama, la fantasía y las novelas.
        </p>
      </footer>

    </div>
  );
}

export default App;