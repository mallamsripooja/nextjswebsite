import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";
import Link from "next/link";

const Blog = () => {
  return (
    <section
      id="blog"
      className="bg-light dark:bg-bg-color-dark py-8 md:py-10 lg:py-14"
    >
      <div className="container">
        <SectionTitle
          title="Media coverage"
          paragraph="In the Spotlight – Surmandal in the Media!"
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>

        <div className="text-center" style={{ marginTop: "80px", marginBottom: "50px" }}>
          <Link
            href="#"
            className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
          >
            More articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
