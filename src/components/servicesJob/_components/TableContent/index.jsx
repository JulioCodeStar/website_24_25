export default function TableContentSection() {
  const tableOfContents = [
    { title: "Cómo hacer un blog – Video", href: "#video", level: 0 },
    { title: "Cómo crear un blog", href: "#crear", level: 0 },
    { title: "1. Elige el nicho de tu blog", href: "#nicho", level: 1 },
    {
      title: "2. Escoge una plataforma de blog adecuada",
      href: "#plataforma",
      level: 1,
    },
    {
      title: "3. Crea un nombre de blog y obtén el dominio",
      href: "#dominio",
      level: 1,
    },
    {
      title: "4. Configura y personaliza tu sitio web",
      href: "#configuracion",
      level: 1,
    },
    {
      title: "5. Crea las páginas y categorías necesarias",
      href: "#categorias",
      level: 1,
    },
    {
      title:
        "6. Haz una estrategia de contenidos y una campaña previa al lanzamiento",
      href: "#estrategia",
      level: 1,
    },
    {
      title: "7. Escribe tu primera entrada de blog",
      href: "#primera-entrada",
      level: 1,
    },
    { title: "8. Publica tu blog", href: "#publicar", level: 1 },
    {
      title: "9. Promueve y aumenta el número de seguidores de tu blog",
      href: "#promocion",
      level: 1,
    },
    { title: "10. Monetiza tu blog", href: "#monetizacion", level: 1 },
  ];

  return (
    <section className="container mx-auto max-w-screen-2xl px-4 py-16 sm:px-8 grid lg:grid-cols-[260px_minmax(0,1fr)]">
      <aside className="top-16 z-20 h-[calc(100vh-5rem)] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 p-8 ps-0 lg:sticky">
        <div className="space-y-8">
          <nav className="text-sm capitalize">
            <ul className="space-y-2">
              {tableOfContents.map((item, index) => (
                <li key={index} className={item.level === 1 ? "ml-4" : ""}>
                  <a
                    href={item.href}
                    className="text-gray-600 hover:text-purple-700 transition-colors duration-200 block py-1"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>

      <article className="lg:border-base-content/10 relative px-0 py-4 sm:py-8 lg:border-s lg:ps-8">
        <div className="mx-auto w-full min-w-0">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Cómo Crear un Blog
            </h1>
            <p className="text-gray-600">
              Una guía completa para crear y gestionar tu propio blog desde cero
            </p>
          </div>

          <div className="space-y-8">
            <section id="video">
              <h2 className="text-2xl font-bold text-purple-700 mb-4">
                Cómo hacer un blog – Video
              </h2>
              <p className="text-gray-700">
                Aquí puedes incluir un video tutorial sobre cómo crear un blog.
                Este contenido visual puede ser muy útil para los lectores que
                prefieren aprender viendo en lugar de leyendo.
              </p>
            </section>

            <section id="crear">
              <h2 className="text-2xl font-bold text-purple-700 mb-4">
                Cómo crear un blog
              </h2>
              <p className="text-gray-700">
                Crear un blog puede parecer abrumador al principio, pero
                siguiendo estos pasos, podrás tener tu propio blog en
                funcionamiento en poco tiempo. A continuación, desglosaremos
                cada paso del proceso.
              </p>
            </section>

            <section id="nicho">
              <h3 className="text-xl font-semibold text-purple-700 mb-3">
                1. Elige el nicho de tu blog
              </h3>
              <p className="text-gray-700">
                Elegir el nicho adecuado es crucial para el éxito de tu blog.
                Considera tus pasiones, experiencias y conocimientos. También
                investiga la demanda y la competencia en diferentes nichos para
                encontrar un equilibrio entre lo que te apasiona y lo que puede
                atraer a una audiencia.
              </p>
            </section>

            <section id="plataforma">
              <h3 className="text-xl font-semibold text-purple-700 mb-3">
                2. Escoge una plataforma de blog adecuada
              </h3>
              <p className="text-gray-700">
                Hay muchas plataformas de blogging disponibles, cada una con sus
                propias ventajas. WordPress, Blogger, y Medium son algunas de
                las opciones populares. Considera factores como la facilidad de
                uso, personalización, y opciones de monetización al elegir tu
                plataforma.
              </p>
            </section>

            <section id="dominio">
              <h3 className="text-xl font-semibold text-purple-700 mb-3">
                3. Crea un nombre de blog y obtén el dominio
              </h3>
              <p className="text-gray-700">
                Elige un nombre memorable y relevante para tu blog. Una vez que
                tengas el nombre, compra un dominio que coincida. Asegúrate de
                que el nombre y el dominio sean fáciles de recordar y escribir.
              </p>
            </section>

            <section id="configuracion">
              <h3 className="text-xl font-semibold text-purple-700 mb-3">
                4. Configura y personaliza tu sitio web
              </h3>
              <p className="text-gray-700">
                Configura tu blog según tus preferencias. Elige un tema
                atractivo, personaliza el diseño, y asegúrate de que sea fácil
                de navegar. No olvides configurar las páginas esenciales como .
              </p>
            </section>

            <section id="categorias">
              <h3 className="text-xl font-semibold text-purple-700 mb-3">
                5. Crea las páginas y categorías necesarias
              </h3>
              <p className="text-gray-700">
                Organiza tu contenido creando categorías relevantes. Esto
                ayudará a tus lectores a encontrar fácilmente el contenido que
                les interesa. Además, crea páginas importantes como la política
                de privacidad y términos de servicio.
              </p>
            </section>

            <section id="estrategia">
              <h3 className="text-xl font-semibold text-purple-700 mb-3">
                6. Haz una estrategia de contenidos y una campaña previa al
                lanzamiento
              </h3>
              <p className="text-gray-700">
                Planifica tu contenido con anticipación. Crea un calendario
                editorial y prepara algunos posts antes de lanzar. Considera
                hacer una campaña de pre-lanzamiento para generar interés en tu
                blog antes de que esté en vivo.
              </p>
            </section>

            <section id="primera-entrada">
              <h3 className="text-xl font-semibold text-purple-700 mb-3">
                7. Escribe tu primera entrada de blog
              </h3>
              <p className="text-gray-700">
                Tu primera entrada es crucial. Debe ser atractiva y dar a los
                lectores una idea de lo que pueden esperar de tu blog. Asegúrate
                de que esté bien escrita y proporcione valor a tus lectores.
              </p>
            </section>

            <section id="publicar">
              <h3 className="text-xl font-semibold text-purple-700 mb-3">
                8. Publica tu blog
              </h3>
              <p className="text-gray-700">
                Una vez que tengas todo listo, es hora de lanzar tu blog.
                Asegúrate de que todo funcione correctamente antes de hacer
                público tu sitio. Considera hacer un soft launch para obtener
                feedback inicial.
              </p>
            </section>

            <section id="promocion">
              <h3 className="text-xl font-semibold text-purple-700 mb-3">
                9. Promueve y aumenta el número de seguidores de tu blog
              </h3>
              <p className="text-gray-700">
                Utiliza las redes sociales, el marketing de contenidos y las
                técnicas de SEO para promocionar tu blog. Interactúa con tu
                audiencia y construye una comunidad alrededor de tu contenido.
              </p>
            </section>

            <section id="monetizacion">
              <h3 className="text-xl font-semibold text-purple-700 mb-3">
                10. Monetiza tu blog
              </h3>
              <p className="text-gray-700">
                Una vez que hayas construido una audiencia, puedes comenzar a
                monetizar tu blog. Algunas opciones incluyen publicidad,
                marketing de afiliados, venta de productos o servicios propios,
                y contenido patrocinado.
              </p>
            </section>
          </div>
        </div>
      </article>
    </section>
  );
}

{
  /* <div className="min-h-screen bg-gray-100 px-4 py-8 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row overflow-y-auto">
          
          <aside className={`lg:w-1/3 lg:block`}>
            <div className="sticky top-0 overflow-y-auto h-screen p-4 lg:p-6">
              <h2 className="text-2xl font-bold text-purple-700 mb-4">Tabla de Contenidos</h2>
              <nav>
                <ul className="space-y-2">
                  {tableOfContents.map((item, index) => (
                    <li key={index} className={item.level === 1 ? 'ml-4' : ''}>
                      <a
                        href={item.href}
                        className="text-gray-600 hover:text-purple-700 transition-colors duration-200 block py-1"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          
          <main className="lg:w-2/3 p-4 lg:p-8">

            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Cómo Crear un Blog</h1>
              <p className="text-gray-600">Una guía completa para crear y gestionar tu propio blog desde cero</p>
            </div>

            <div className="space-y-8">
              <section id="video">
                <h2 className="text-2xl font-bold text-purple-700 mb-4">Cómo hacer un blog – Video</h2>
                <p className="text-gray-700">Aquí puedes incluir un video tutorial sobre cómo crear un blog. Este contenido visual puede ser muy útil para los lectores que prefieren aprender viendo en lugar de leyendo.</p>
              </section>

              <section id="crear">
                <h2 className="text-2xl font-bold text-purple-700 mb-4">Cómo crear un blog</h2>
                <p className="text-gray-700">Crear un blog puede parecer abrumador al principio, pero siguiendo estos pasos, podrás tener tu propio blog en funcionamiento en poco tiempo. A continuación, desglosaremos cada paso del proceso.</p>
              </section>

              <section id="nicho">
                <h3 className="text-xl font-semibold text-purple-700 mb-3">1. Elige el nicho de tu blog</h3>
                <p className="text-gray-700">Elegir el nicho adecuado es crucial para el éxito de tu blog. Considera tus pasiones, experiencias y conocimientos. También investiga la demanda y la competencia en diferentes nichos para encontrar un equilibrio entre lo que te apasiona y lo que puede atraer a una audiencia.</p>
              </section>

              <section id="plataforma">
                <h3 className="text-xl font-semibold text-purple-700 mb-3">2. Escoge una plataforma de blog adecuada</h3>
                <p className="text-gray-700">Hay muchas plataformas de blogging disponibles, cada una con sus propias ventajas. WordPress, Blogger, y Medium son algunas de las opciones populares. Considera factores como la facilidad de uso, personalización, y opciones de monetización al elegir tu plataforma.</p>
              </section>

              <section id="dominio">
                <h3 className="text-xl font-semibold text-purple-700 mb-3">3. Crea un nombre de blog y obtén el dominio</h3>
                <p className="text-gray-700">Elige un nombre memorable y relevante para tu blog. Una vez que tengas el nombre, compra un dominio que coincida. Asegúrate de que el nombre y el dominio sean fáciles de recordar y escribir.</p>
              </section>

              <section id="configuracion">
                <h3 className="text-xl font-semibold text-purple-700 mb-3">4. Configura y personaliza tu sitio web</h3>
                <p className="text-gray-700">Configura tu blog según tus preferencias. Elige un tema atractivo, personaliza el diseño, y asegúrate de que sea fácil de navegar. No olvides configurar las páginas esenciales como .</p>
              </section>

              <section id="categorias">
                <h3 className="text-xl font-semibold text-purple-700 mb-3">5. Crea las páginas y categorías necesarias</h3>
                <p className="text-gray-700">Organiza tu contenido creando categorías relevantes. Esto ayudará a tus lectores a encontrar fácilmente el contenido que les interesa. Además, crea páginas importantes como la política de privacidad y términos de servicio.</p>
              </section>

              <section id="estrategia">
                <h3 className="text-xl font-semibold text-purple-700 mb-3">6. Haz una estrategia de contenidos y una campaña previa al lanzamiento</h3>
                <p className="text-gray-700">Planifica tu contenido con anticipación. Crea un calendario editorial y prepara algunos posts antes de lanzar. Considera hacer una campaña de pre-lanzamiento para generar interés en tu blog antes de que esté en vivo.</p>
              </section>

              <section id="primera-entrada">
                <h3 className="text-xl font-semibold text-purple-700 mb-3">7. Escribe tu primera entrada de blog</h3>
                <p className="text-gray-700">Tu primera entrada es crucial. Debe ser atractiva y dar a los lectores una idea de lo que pueden esperar de tu blog. Asegúrate de que esté bien escrita y proporcione valor a tus lectores.</p>
              </section>

              <section id="publicar">
                <h3 className="text-xl font-semibold text-purple-700 mb-3">8. Publica tu blog</h3>
                <p className="text-gray-700">Una vez que tengas todo listo, es hora de lanzar tu blog. Asegúrate de que todo funcione correctamente antes de hacer público tu sitio. Considera hacer un soft launch para obtener feedback inicial.</p>
              </section>

              <section id="promocion">
                <h3 className="text-xl font-semibold text-purple-700 mb-3">9. Promueve y aumenta el número de seguidores de tu blog</h3>
                <p className="text-gray-700">Utiliza las redes sociales, el marketing de contenidos y las técnicas de SEO para promocionar tu blog. Interactúa con tu audiencia y construye una comunidad alrededor de tu contenido.</p>
              </section>

              <section id="monetizacion">
                <h3 className="text-xl font-semibold text-purple-700 mb-3">10. Monetiza tu blog</h3>
                <p className="text-gray-700">Una vez que hayas construido una audiencia, puedes comenzar a monetizar tu blog. Algunas opciones incluyen publicidad, marketing de afiliados, venta de productos o servicios propios, y contenido patrocinado.</p>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div> */
}
