import { getArticle } from "../../../../lib/api";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const id = searchParams.get("id");

  console.log("Received Secret:", secret);
  console.log("Expected Secret:", process.env.CONTENTFUL_PREVIEW_SECRET);
  console.log("Received ID:", id);

  if (!secret || !id) {
    return new Response("Missing parameters", { status: 400 });
  }

  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
    return new Response("Invalid token", { status: 401 });
  }

  const article = await getArticle(id, true);

  if (!article) {
    return new Response("Article not found", { status: 404 });
  }

  draftMode().enable();
  const { isEnabled } = draftMode();
  console.log("Draft Mode Enabled:", isEnabled);
  redirect(`/articles/${article.sys.id}`);
}