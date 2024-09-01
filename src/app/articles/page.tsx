import Breadcrumb from "@/components/Common/Breadcrumb";
import { getAllArticles } from "../../../lib/api";
import Image from "next/image";
import Link from "next/link";
import { draftMode } from "next/headers";
import { Metadata } from "next";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
} from "react";


export const metadata: Metadata = {
  title: "AECC | Artigos",
  description: "Associação dos Estudantes Cabo-verdianos na China",
  // other metadata
};

export default async function Blog() {
  const { isEnabled } = draftMode();
  let articles = [];
  try {
    articles = await getAllArticles(isEnabled);
    //console.log("Draft Mode Enabled:", isEnabled);
    //console.log("Fetched Articles:", articles);
  } catch (error) {
    console.error("Failed to fetch articles:", error);
  }

  return (
    <>
      <Breadcrumb
        pageName="Blogs & Artigos"
        description="Diálogos, experiências e insights de estudantes cabo-verdianos vivendo o intercâmbio cultural na China."
      />

      <section className="pb-10 pt-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            {articles?.length > 0 ? (
              articles.map(
                (article: {
                  sys: { id: Key | null | undefined };
                  articleImage: { url: string | StaticImport };
                  title:
                    | string
                    | number
                    | bigint
                    | boolean
                    | ReactElement<any, string | JSXElementConstructor<any>>
                    | Iterable<ReactNode>
                    | ReactPortal
                    | Promise<AwaitedReactNode>
                    | null
                    | undefined;
                  categoryName:
                    | string
                    | number
                    | bigint
                    | boolean
                    | ReactElement<any, string | JSXElementConstructor<any>>
                    | Iterable<ReactNode>
                    | ReactPortal
                    | Promise<AwaitedReactNode>
                    | null
                    | undefined;
                  summary:
                    | string
                    | number
                    | bigint
                    | boolean
                    | ReactElement<any, string | JSXElementConstructor<any>>
                    | Iterable<ReactNode>
                    | ReactPortal
                    | Promise<AwaitedReactNode>
                    | null
                    | undefined;
                  authorName:
                    | string
                    | number
                    | bigint
                    | boolean
                    | ReactElement<any, string | JSXElementConstructor<any>>
                    | Iterable<ReactNode>
                    | ReactPortal
                    | Promise<AwaitedReactNode>
                    | null
                    | undefined;
                }) => (
                  <article
                    key={article.sys.id}
                    className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8"
                  >
                    <div className="relative overflow-hidden rounded-lg  bg-white shadow-one hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark transition-transform transform hover:scale-105 duration-300">
                      <Link href={`/articles/${article.sys.id}`}>
                        <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
                          {article.categoryName}
                        </span>
                      </Link>
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
                          <p className="text-gray-500 dark:text-gray-400 mb-3">
                            {article.summary}
                          </p>
                          <p className="text-gray-600 dark:text-gray-300 font-bold">
                            Written by: {article.authorName}
                          </p>
                        </Link>
                      </div>
                    </div>
                  </article>
                )
              )
            ) : (
              <p>No articles available.</p>
            )}
          </div>
          {/*<div className="-mx-4 flex flex-wrap" data-wow-delay=".15s">
            <div className="w-full px-4">
              <ul className="flex items-center justify-center pt-8">
                <li className="mx-1">
                  <a
                    href="/blog-sidebar"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    Prev
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    1
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    2
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    3
                  </a>
                </li>
                <li className="mx-1">
                  <span className="flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color">
                    ...
                  </span>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    12
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
          
        </div>
      </section>
    </>
  );
}
