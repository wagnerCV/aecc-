export default async function handler(req, res) {
    // Verifica se o método da requisição é POST
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Method Not Allowed" });
    }
  
    // Verifique se a requisição contém um segredo e valide-o
    const secret = req.query.secret;
    if (secret !== process.env.CONTENTFUL_WEBHOOK_SECRET) {
      return res.status(401).json({ message: "Invalid Token" });
    }
  
    try {
      // Extraia o slug ou qualquer outra informação relevante da requisição
      const { slug } = req.body;
  
      // Revalide a página específica com o slug
      await res.revalidate(`/articles/${slug}`);
  
      // Responda que a revalidação foi bem-sucedida
      return res.json({ revalidated: true });
    } catch (err) {
      // Em caso de erro, logue-o e retorne um erro 500
      console.error(err);
      return res.status(500).json({ message: "Error revalidating" });
    }
  }
  