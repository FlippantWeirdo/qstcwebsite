import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";

interface BlogPostContentProps {
  title: string;
  date: string;
  category: string;
  coverImage: string;
  content: string;
}

export function BlogPostContent({
  title,
  date,
  category,
  coverImage,
  content,
}: BlogPostContentProps) {
  return (
    <article className="bg-white">
      {/* Hero header */}
      <div className="relative h-[50vh] min-h-[400px] w-full flex items-end overflow-hidden">
        <Image
          src={coverImage}
          alt={title}
          fill
          priority
          className="object-cover brightness-[0.35]"
        />
        <div className="container relative z-10 mx-auto px-6 pb-12 lg:px-12">
          <div className="max-w-3xl">
            <Link
              href="/blog"
              className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-blue-300 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            <div className="mb-4 flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#3B82F6] px-3 py-1 text-xs font-bold text-white">
                <Tag className="h-3 w-3" />
                {category}
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm text-gray-300">
                <Calendar className="h-4 w-4" />
                <time dateTime={date}>
                  {new Date(date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              </span>
            </div>

            <h1 className="text-3xl font-extrabold text-white md:text-4xl lg:text-5xl leading-tight">
              {title}
            </h1>
          </div>
        </div>
      </div>

      {/* MDX Content */}
      <div className="container mx-auto px-6 py-16 lg:px-12">
        <div className="prose mx-auto max-w-3xl">
          <MDXRemote source={content} />
        </div>
      </div>
    </article>
  );
}
