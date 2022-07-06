import { graphql, useStaticQuery } from "gatsby";

const useSeo = () => {
  const queryResponse = useStaticQuery(graphql`
    query {
      datoCmsSite {
        globalSeo {
          siteName
          titleSuffix
          fallbackSeo {
            title
            description
          }
        }
      }
    }
  `);

  return queryResponse.datoCmsSite.globalSeo;
};

export default useSeo;
