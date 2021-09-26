import Link from "next/link"
import Image from "next/image"

const Thumbnail = (props) => {
    const blog = props.blog
    const route = props.route

    return (
        <Link href={`${route}` + blog.id} >
            <a>
                <section className="thumbnail">
                        <Image
                        src={blog.jetpack_featured_media_url} height={300} width={480} alt="alt text not available"/>
                        <h2 className="mt-1 text-2xl cursor-pointer">{blog.title.rendered}
                        </h2>

                        <div>
                            <p dangerouslySetInnerHTML={{__html: blog.excerpt.rendered}} className="truncate max-w-md"></p>
                        </div>

                </section>
            </a>
    </Link>
    );
}

export default Thumbnail

// const Thumbnail = ({ response }) => {
//     return (

//         <div>
//             <Image layout="responsive"
//             src=""
//             height=""
//             width=""
//             />
//             <div className="p-2">
//                 <p className="truncate max-w-md">{response.excerpt}</p>
//             </div>

//         </div>
//     )
// }

// export default Thumbnail
