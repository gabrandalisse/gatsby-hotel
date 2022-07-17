exports.createPages = async ({ actions, graphql, reporter }) => {
  const queryResult = await graphql(`
    query {
      allDatoCmsRoom {
        nodes {
          slug
        }
      }
    }
  `);

  if (queryResult.error)
    reporter.panic(
      "an error ocurred while triying to fetch the query",
      queryResult.errors
    );

  const rooms = queryResult.data.allDatoCmsRoom.nodes;
  rooms.forEach(room => {
    actions.createPage({
      path: room.slug,
      component: require.resolve("./src/components/rooms.jsx"),
      context: {
        slug: room.slug,
      },
    });
  });
};
