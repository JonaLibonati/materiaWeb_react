
import baroneImage from '../../assets/images/barone.jpg';
import cv from '../../assets/pfds/CV_Arq_Edgardo_Barone.pdf';
import './aboutUs.styles.css';

export const AboutUs = () => {
  return (
    <>
        <div className="info">
            <article className="info__art">
                <p className="info__p info__p--mat">
                    Materia es un estudio de Arquitectura que se desempeña en dos áreas: diseño arquitectónico y desarrollo de proyectos. Nuestro equipo de trabajo está conformado por Arquitectos, Diseñadores e Ingenieros que han participado en proyectos de diversas escalas, tipologías y complejidades, incorporando ideas innovadoras con compromiso y dedicación. A su vez, contamos con Asesores externos en diversos rubros, lo que nos permite desarrollar los proyectos íntegramente en forma interdisciplinaria, para dar una respuesta diligente y eficaz a las necesidades de cada encomienda.
                </p>
                <h2 className="info__H2">ALCANCES PROFESIONALES</h2>
                <ul className="info__list">
                    <li className="info__item">Proyecto y Dirección de Obra</li>
                    <li className="info__item">Planificación Urbana</li>
                    <li className="info__item">Diseño y Cálculo de Estructuras</li>
                    <li className="info__item">Diseño y Cálculo de Instalaciones</li>
                </ul>
                <ul className="info__list">
                    <li className="info__item">Análisis de Factibilidad en Proyectos</li>
                    <li className="info__item">Presentaciones</li>
                    <li className="info__item">Documentación de Obra Licitatoria</li>
                    <li className="info__item">Documentación de Obra Ejecutiva</li>
                </ul>
            </article>
            <article className="info__art info__art--edg">
                <figure className="info__fig">
                    <img src={baroneImage} />
                </figure>
                <h1 className="info__H1">ARQ. EDGARDO BARONE</h1>
                <h3 className="info__H3">FUNDADOR</h3>
                <div className="info__cv">
                    <a className="info__button" href={cv} target="_blank">descargar cv</a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="info__chevron" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </div>
                <p className="info__p info__p--Edg">Arq. Edgardo Barone (1981) cursó sus estudios en la Universidad de Buenos Aires, obteniendo su título de arquitecto en 2010 distinguido con diploma de honor. Desde el 2000 ha trabajado en destacadas oficinas de arquitectura especializándose en diseño integral sustentable para emprendimientos de vivienda unifamiliar y multifamiliar, oficinas y proyectos urbanos. En 2013 decide fundar su propio estudio, focalizando su desarrollo profesional en la calidad y compromiso que conllevan los distintos proyectos públicos y privados de gran valor arquitectónico en los que ha participado.</p>
                <h3 className="info__H3 info__H3--rest info__H3--restFirst">PARTICIPACIÓN EN PROYECTOS DESTACADOS</h3>
                <h2 className="info__H2 info__H2--rest">TORRE BANCO MACRO</h2>
                <p className="info__p info__p--rest">Coordinación de proyecto ejecutivo para contratista principal, con la supervisión del estudio Pelli/ Clarke/ Pelli + GSA Arquitectos.</p>
                <h2 className="info__H2 info__H2--rest">VIVIENDAS VILLA OLÍMPICA</h2>
                <p className="info__p info__p--rest">Elaboración del anteproyecto ganador del concurso nacional número 3 y desarrollo del proyecto Licitatorio en conjunto con el Ministerio de Desarrollo Urbano.</p>
                <h2 className="info__H2 info__H2--rest">PEATONAL FORMOSA</h2>
                <p className="info__p info__p--rest">Desarrollo de proyecto y documentación ejecutiva para la peatonalización de la calle Rivadavia entre 25 de Mayo y Saavedra.</p>
                <h2 className="info__H2 info__H2--rest">DESARROLLO MASTERPLAN PLAYA FERROVIARIA CABALLITO</h2>
                <p className="info__p info__p--rest">Elaboración del anteproyecto ganador del concurso nacional y su posterior ajuste ejecutivo para subdivisión de parcelas, un trabajo conjunto con ANSES y Playas Ferroviarias SA.</p>
                <h2 className="info__H2 info__H2--rest">NODO OBELISCO</h2>
                <p className="info__p info__p--rest">LÍNEAS B, C Y D - MEJORAMIENTO DE LOS ACCESOS Y DE LAS CONEXIONES PEATONALES. Desarrollo conceptual de intervenciones a realizar orientadas a mejorar los espacios de circulación, transbordo, incorporar nuevos accesos al sistema y mejorar las condiciones urbano-arquitectónicas y de habitabilidad del Nodo.</p>
                <h2 className="info__H2 info__H2--rest">NODO RETIRO</h2>
                <p className="info__p info__p--rest">Anteproyecto y Estudio Técnico de Impacto Ambiental del Centro de Trasbordo Nodo Retiro para mejorar de las condiciones de circulación de las corrientes de tránsito vehicular y peatonal conformado por un espacio en trinchera exclusivo para buses y 2 túneles vehiculares.</p>
                <h2 className="info__H2 info__H2--rest">TRANSBORDO CONSTITUCIÓN</h2>
                <p className="info__p info__p--rest">Desarrollo del anteproyecto preliminar y estudio de inserción urbana de las estaciones de las líneas F y G en Constitución.</p>
                <h3 className="info__H3 info__H3--rest">EXPERIENCIA PROFESIONAL</h3>
                <p className="info__p info__p--list info__p--rest">
                    <b className="info__b">2008 I actual:</b> Estudio MATERIA, Titular.
                    <br />
                    <b className="info__b">2015 I 2018 :</b> Metrocons S.A, Proyectista y Coordinador I Oficinas y Vivienda <span className="noShowTablet noShowMobile">                </span>Multifamiliar.
                    <br />
                    <b className="info__b">2009 I 2013 :</b> AC&A S.A, Proyectista y Coordinador I Infraestructura de <span className="noShowTablet noShowMobile">                </span>transporte.
                    <br />
                    <b className="info__b">2000 I 2008 :</b> B+D Arquitectos. Proyectista y Coordinador de Obras I Vivienda <span className="noShowTablet noShowMobile">                </span>Multifamiliar.
                    <br />
                    <b className="info__b">2006 I 2007 :</b> Estudio Groisman. Proyecto y Dirección de Obras I Vivienda <span className="noShowTablet noShowMobile">                </span>Multifamiliar.
                    <br />
                    <b className="info__b">2004 I 2006 :</b> Estudio Teijón. Documentación Ejecutiva y Dirección de Obras I <span className="noShowTablet noShowMobile">                </span>Retail
                    <br />
                    <b className="info__b">             2005 :</b> América TV. Proyecto y Documentación de escenografías.
                    <br />
                </p>
                <h3 className="info__H3 info__H3--rest">FORMACIÓN ACADÉMICA</h3>
                <p className="info__p info__p--list info__p--rest">
                    <b className="info__b">2000 I 2010 :</b> Arquitecto. Universidad de Buenos Aires. Facultad de Arquitectura Diseño y Urbanismo. Promedio general: 8.08.  Segunda escolta abanderado, promoción diciembre 2011. Diploma de Honor.
                </p>
                <h3 className="info__H3 info__H3--rest">FORMACIÓN COMPLEMENTARIA</h3>
                <p className="info__p info__p--rest info__p--complem">
                    <b className="info__b">- </b>Metodología de Administración de proyectos - PMvalue.
                    <br />
                    <b className="info__b">- </b>IV Jornadas de Humanización del Espacio Público - Ministerio de Desarrollo Urbano.
                    <br />
                    <b className="info__b">- </b>IV Seminario de Medio Ambiente, Ahorro energético e Innovación tecnológica - Sociedad Central de Arquitectos.
                </p>
            </article>
        </div>
    </>
  )
}
