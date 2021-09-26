import Link from "next/link"
import Image from "next/image";

const BlogList = (props) => {
    const blogs = props.blogs;
    const route = props.route;

    return (
        <div className="thumbnail-grid">

            { blogs.map((blog) => (
            <Link href={`${route}` + blog.id} key={blog.id}>
                <a>
                <section className="thumbnail">
                <Image
                        src={blog.jetpack_featured_media_url} height={300} width={480} alt="Alt text not available"/>
                <h2 className="mt-1 text-2xl cursor-pointer">{blog.title.rendered}</h2>

                <div>
                    <p dangerouslySetInnerHTML={{__html: blog.excerpt.rendered}} className="truncate max-w-md"></p>
                        </div>
                  </section>
              </a>
            </Link>
            ))}
        </div>
    );
}

export default BlogList

