import { graphql, useStaticQuery } from "gatsby";

const useRooms = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsHabitacion {
        nodes {
          titulo
          id
          slug
          contenido
          imagen {
            fluid(maxWidth: 1200) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `);

  return data.allDatoCmsHabitacion.nodes.map(room => ({
    titulo: room.titulo,
    id: room.id,
    contenido: room.contenido,
    imagen: room.imagen,
    slug: room.slug,
  }));
};

export default useRooms;
