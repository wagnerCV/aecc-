const ARTICLE_GRAPHQL_FIELDS = `
  sys {
    id
  }
  title
  summary
  categoryName
  authorName
  detailsItalic
  date
  authorImage {
    url
  }
  articleImage {
    url
  }
    myImagesCollection{
        items{
          url
        }
      }
`;


async function fetchGraphQL(query, preview = false) {
  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
      next: { tags: ["articles"] },
    }
  );

  const result = await response.json();

  if (result.errors) {
    console.error("GraphQL errors:", result.errors);
    throw new Error("Failed to fetch data from Contentful");
  }

  return result;
}

function extractArticleEntries(fetchResponse) {
  return fetchResponse?.data?.knowledgeArticleCollection?.items || [];
}

export async function getAllArticles(isDraftMode = false) {
  let allArticles = [];
  let skip = 0;
  const pageSize = 100; // Número de artigos por página

  while (true) {
    const query = `
      query {
        knowledgeArticleCollection(order: date_DESC, limit: ${pageSize}, skip: ${skip}, preview: ${
      isDraftMode ? "true" : "false"
    }) {
          items {
            ${ARTICLE_GRAPHQL_FIELDS}
          }
        }
      }
    `;

    const articles = await fetchGraphQL(query, isDraftMode);

    const extractedArticles = extractArticleEntries(articles);
    
    if (extractedArticles.length === 0) {
      break; // Se não houver mais artigos, saia do loop
    }

    allArticles = allArticles.concat(extractedArticles);
    skip += pageSize; // Incrementa o skip para a próxima "página" de artigos
  }

  return allArticles;
}


export async function getArticle(
  //slug,
  id,
  isDraftMode = false
) {
  const article = await fetchGraphQL(
    `query {
        knowledgeArticleCollection(where:{sys: {id: "${id}"}}, limit: 2, preview: ${
      isDraftMode ? "true" : "false"
    }) {
          items {
            ${ARTICLE_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  );
  return extractArticleEntries(article)[0];
}