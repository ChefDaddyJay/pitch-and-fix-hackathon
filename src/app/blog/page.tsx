import { fetchBlogPosts } from "@/lib/data";
import { HorizontalDivider, PageSection } from "@/ui/LayoutComponents";
import Image from "next/image";

export default async function BlogPage() {
  const posts = await fetchBlogPosts();

  return (
    <div className="w-full flex justify-center m-4">
      <div className="w-4/5 flex flex-col gap-4">
        <PageSection>
          <HorizontalDivider text="ShopEase Blog" />
        </PageSection>
        {posts ? (
          posts.map((post, i) => (
            <PageSection title={post.title} key={`${post.title}-${i}`}>
              <div className="w-7/10 pb-4">
                <div className="float-left mr-4 py-4 w-full md:w-max">
                  <Image
                    src={post.image}
                    alt="Blog post image"
                    width={300}
                    height={200}
                  />
                </div>
                {post.body}
              </div>
            </PageSection>
          ))
        ) : (
          <PageSection>
            <HorizontalDivider text="No Blog Posts" />
          </PageSection>
        )}
      </div>
    </div>
  );
}
