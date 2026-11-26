// Cambia los textos de esta lista y de las secciones por los de tu negocio.
const WHATSAPP = 'https://wa.me/593990000000';

const servicios = [
  {
    nombre: 'Revisión básica',
    precio: '$15',
    detalle: 'Frenos, cambios, cadena y presión de las llantas. Ideal si tu bicicleta hace ruido o frena mal.',
  },
  {
    nombre: 'Mantenimiento completo',
    precio: '$35',
    detalle: 'Revisión básica más limpieza, lubricación y ajuste de ruedas, dirección y pedales.',
  },
  {
    nombre: 'Reparación de pinchazo',
    precio: '$8',
    detalle: 'Parche o cambio de cámara en el lugar. Si hace falta una cámara nueva, se suma su costo.',
  },
];

const preguntas = [
  {
    pregunta: '¿Cuánto tarda cada servicio?',
    respuesta: 'La revisión básica toma entre 40 y 60 minutos. El mantenimiento completo, unas 2 horas.',
  },
  {
    pregunta: '¿Qué incluye la revisión básica?',
    respuesta: 'Revisamos frenos, cambios, cadena y presión de las llantas, y ajustamos lo que haga falta.',
  },
  {
    pregunta: '¿Llevan repuestos?',
    respuesta: 'Llevamos cámaras, pastillas de freno y cables de uso común. Si tu bicicleta necesita otra pieza, te avisamos el costo antes de comprarla.',
  },
  {
    pregunta: '¿Cómo se paga?',
    respuesta: 'Pagas al terminar el trabajo, en efectivo o por transferencia.',
  },
  {
    pregunta: '¿Y si mi barrio no está en la zona?',
    respuesta: 'Escríbenos por WhatsApp con tu dirección y te decimos si podemos llegar.',
  },
];

function Encabezado() {
  return (
    <header className="sitio">
      <div className="contenedor">
        <a className="marca" href="/">Ruedalibre</a>
        <nav aria-label="Principal">
          <ul>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#como-funciona">Cómo funciona</a></li>
            <li><a href="#zona">Zona y horario</a></li>
            <li><a href="#preguntas">Preguntas</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function Servicios() {
  return (
    <section id="servicios">
      <h2>Servicios y precios</h2>
      <div className="tarjetas">
        {servicios.map((s) => (
          <div className="tarjeta" key={s.nombre}>
            <h3>{s.nombre}</h3>
            <p className="precio">{s.precio}</p>
            <p>{s.detalle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Preguntas() {
  return (
    <section id="preguntas">
      <h2>Preguntas frecuentes</h2>
      {preguntas.map((p) => (
        <details key={p.pregunta}>
          <summary>{p.pregunta}</summary>
          <p>{p.respuesta}</p>
        </details>
      ))}
    </section>
  );
}

export default function App() {
  return (
    <>
      <Encabezado />
      <main>
        <div className="contenedor">
          <section className="hero">
            <h1>Mantenimiento de bicicletas a domicilio en Quito</h1>
            <p>Vamos a tu casa u oficina, revisamos tu bicicleta y la dejamos lista para rodar. Sin cargarla, sin esperar en un taller.</p>
            <a className="boton" href={`${WHATSAPP}?text=Hola%2C%20quiero%20una%20revisi%C3%B3n%20para%20mi%20bicicleta.`}>Escríbenos por WhatsApp</a>
          </section>

          <Servicios />

          <section id="como-funciona">
            <h2>Cómo funciona</h2>
            <ol className="pasos">
              <li>Escríbenos por WhatsApp y cuéntanos qué le pasa a tu bicicleta.</li>
              <li>Acordamos el día y la hora que te queden bien.</li>
              <li>Vamos a tu dirección, la arreglamos ahí mismo y pagas al terminar.</li>
            </ol>
          </section>

          <section id="zona">
            <h2>Zona y horario</h2>
            <p><strong>Zona:</strong> atendemos en el norte, centro y sur de Quito.</p>
            <p><strong>Horario:</strong> de lunes a sábado, de 8:00 a 18:00.</p>
          </section>

          <Preguntas />

          <section id="contacto">
            <h2>Contacto</h2>
            <p>WhatsApp: <a href={WHATSAPP}>+593 99 000 0000</a></p>
            <p>Correo: <a href="mailto:hola@ruedalibre.example">hola@ruedalibre.example</a></p>
            <p className="aviso">Ruedalibre es un negocio de ejemplo. El teléfono y el correo son inventados.</p>
          </section>
        </div>
      </main>
      <footer className="sitio">
        <div className="contenedor">
          <p>© 2026 Ruedalibre · <a href="/privacidad/">Aviso de privacidad</a></p>
        </div>
      </footer>
    </>
  );
}
