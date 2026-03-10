import { getAllPosts } from "@/lib/blog";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { AboutCta } from "@/components/about/AboutCta";

export const metadata = {
  title: "Blog | QSTC Services Limited",
  description:
    "Industry insights, project highlights, and expert perspectives on systems integration, fire safety, and smart building technology from QSTC.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="flex min-h-screen flex-col font-sans">
      <BlogHero />
      <BlogGrid posts={posts} />
      <AboutCta />
    </main>
  );
}
