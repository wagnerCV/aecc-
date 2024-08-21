import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { getAllArticles } from "../../../lib/api";
import Image from "next/image";
import Link from "next/link";
import { draftMode } from "next/headers";

import { Metadata } from "next";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";

export const metadata: Metadata = {
  title: "Blog Page | Free Next.js Template for Startup and SaaS",
  description: "This is Blog Page for Startup Nextjs Template",
  // other metadata
};

export default async function Blog() {
  const { isEnabled } = draftMode();
  let articles = [];
  try {
    articles = await getAllArticles(2, isEnabled);
  } catch (error) {
    console.error("Failed to fetch articles:", error);
  }

  return (
    <>
      <Breadcrumb
        pageName="Blog Grid"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

<section className="pb-20 pt-20">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap -mx-4">
      {articles?.length > 0 ? (
        articles.map((article: { sys: { id: Key | null | undefined; }; articleImage: { url: string | StaticImport; }; title: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; categoryName: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; summary: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; authorName: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }) => (
          <article
            key={article.sys.id}
            className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8"
          >
            <div className="relative overflow-hidden rounded-lg  bg-white shadow-one hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark transition-transform transform hover:scale-105 duration-300">
            <Link href={`/articles/${article.sys.id}`}>
              <Image
                alt="Article Image"
                className="w-full h-56 object-cover"
                height="224"
                src={article.articleImage.url}
                width="350"
              />
              </Link>
              <div className="p-6">
                <Link href={`/articles/${article.sys.id}`}>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-3">
                    {article.title}
                  </h3>
                
                <div className="inline-block rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-800 mb-3">
                  {article.categoryName}
                </div>
                <p className="text-gray-500 dark:text-gray-400 mb-3">
                  {article.summary}
                </p>
                <p className="text-gray-600 dark:text-gray-300 font-bold">
                  Written by: {article.authorName}
                </p>
                </Link>
                <div className="flex justify-end mt-4">
                  <Link
                    className="text-sm font-medium text-primary-500 hover:text-primary-600"
                    href={`/articles/${article.sys.id}`}
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))
      ) : (
        <p>No articles available.</p>
      )}
    </div>

    <div className="flex justify-center pt-8">
      <ul className="flex space-x-2">
        <li>
          <a
            href="#0"
            className="flex items-center justify-center h-9 w-9 rounded-md bg-gray-200 text-sm text-gray-700 hover:bg-primary-500 hover:text-white transition"
          >
            Prev
          </a>
        </li>
        <li>
          <a
            href="#0"
            className="flex items-center justify-center h-9 w-9 rounded-md bg-gray-200 text-sm text-gray-700 hover:bg-primary-500 hover:text-white transition"
          >
            1
          </a>
        </li>
        <li>
          <a
            href="#0"
            className="flex items-center justify-center h-9 w-9 rounded-md bg-gray-200 text-sm text-gray-700 hover:bg-primary-500 hover:text-white transition"
          >
            2
          </a>
        </li>
        <li>
          <a
            href="#0"
            className="flex items-center justify-center h-9 w-9 rounded-md bg-gray-200 text-sm text-gray-700 hover:bg-primary-500 hover:text-white transition"
          >
            3
          </a>
        </li>
        <li>
          <span className="flex items-center justify-center h-9 w-9 rounded-md bg-gray-200 text-sm text-gray-500 cursor-not-allowed">
            ...
          </span>
        </li>
        <li>
          <a
            href="#0"
            className="flex items-center justify-center h-9 w-9 rounded-md bg-gray-200 text-sm text-gray-700 hover:bg-primary-500 hover:text-white transition"
          >
            12
          </a>
        </li>
        <li>
          <a
            href="#0"
            className="flex items-center justify-center h-9 w-9 rounded-md bg-gray-200 text-sm text-gray-700 hover:bg-primary-500 hover:text-white transition"
          >
            Next
          </a>
        </li>
      </ul>
    </div>
  </div>
</section>

    </>
  );
}
