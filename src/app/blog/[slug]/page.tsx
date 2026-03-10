import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import { BlogPostContent } from "@/components/blog/BlogPostContent";
import { AboutCta } from "@/components/about/AboutCta";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  try {
    const post = getPostBySlug(slug);
    return {
      title: `${post.title} | QSTC Blog`,
      description: post.excerpt,
    };
  } catch {
    return { title: "Post Not Found | QSTC Blog" };
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col font-sans">
      <BlogPostContent
        title={post.title}
        date={post.date}
        category={post.category}
        coverImage={post.coverImage}
        content={post.content}
      />
      <AboutCta />
    </main>
  );
}
