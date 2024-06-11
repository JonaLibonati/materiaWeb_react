import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import "./postBookSection.styles.css";

const Book = ({ scroll, children }) => {

  return (
    <motion.div
      className="book__container"
      style={{ opacity: scroll }}
    >
      {children}
    </motion.div>
  );
};

export const PostBookSection = () => {
  const book = useRef(null);

  const { scrollYProgress } = useScroll({
    target: book,
    
  });

  const scroll1 = useTransform(scrollYProgress, [0, .1, 0.5], [1, 1, 0])
  const scroll2 = useTransform(scrollYProgress, [0.3, 0.7, 1], [0, 1, 0])

  return (
    <>
      <section ref={book} className="book">
        <Book scroll={scroll1}>
          <div className="book__img"></div>
        </Book>
        <Book scroll={scroll2}>
          <div className="book__p">
          Edgardo Barone, un joven arquitecto argentino, nos invita a recorrer a través de este libro, su notable carrera. Esta publicación registra su pensamiento y su notable participación en concursos durante los últimos diez años. Con diecisiete premiaciones, se ve reflejado su compromiso constante con la excelencia en la arquitectura.  En las casi cuatrocientas páginas de este libro, el lector encontrará un testimonio auténtico de su trayectoria y una mirada detallada de su apasionado proceso creativo. Esta obra, cuidadosamente documentada, nos ofrece una visión integral de Edgardo como arquitecto y como persona, revelando el modo en que logró materializar sus ideas y proyectos, a pesar de las dificultades.
          </div>
        </Book>
      </section>
    </>
  );
};
