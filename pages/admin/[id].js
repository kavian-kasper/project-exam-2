import DeletePostBtn from "../../components/admin/DeleteBtn";
import AdminNav from "../../components/nav/AdminNav";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useAxios from "../../components/hooks/useAxios";
import { useRouter } from "next/router";
import { blogpostUrl } from "../api/api";
import SuccessMsg from "../../components/common/SuccessMsg";
import { checkAuth } from "../../utilities/checkAuth";

export async function getStaticPaths() {

    const response = await fetch("https://braanaas.org/semester-assignment/wp-json/wp/v2/posts");
    const data = await response.json();
    const paths =  data.map(blogPost  => {
        return {
            params: { id: blogPost.id.toString() }
        }
    })
    return {
      paths,
      fallback: false
    }
  }

  export const getStaticProps = async (context) => {
    const id = context.params.id;
    const response = await fetch("https://braanaas.org/semester-assignment/wp-json/wp/v2/posts/" + id);
    const data = await response.json();

  return {
      props: {
        data },
    }
  }

export const EditBlog =  ({ data }) => {

  checkAuth();

  const [submitting, setSubmitting] = useState(false);
  const [uploaded, setUploaded] = useState(null);

  const router = useRouter();

  const http = useAxios();

  const id = data.id

  const renderContentHtml = `defaultValue=`

  const { register, handleSubmit, formState: { errors }} = useForm();

  async function onSubmit(data) {
    setSubmitting(true);

    data.status = "publish";
    // data.featured_media = null;

    try {
      const response = await http.put(blogpostUrl + id, data);
      console.log("response", response.data);
      setUploaded(true)

      setTimeout(() => {
        router.push("/admin")
      }, 1500)

    } catch (error) {
      console.log("error", error);
      setUploaded(false)

    } finally {
      setSubmitting(false);
    }
}
  return (
      <div className="h-screen bg-gray-100">
        <div>
          <AdminNav />
        </div>

        <div className=" flex flex-col justify-center items-center bg-gray-100">
        <form onSubmit={handleSubmit(onSubmit)}
        className="w-full lg:w-8/12 bg-white shadow-md mt-12 rounded px-4 pt-6 pb-8 mb-4">
          <fieldset className="flex flex-col items-center" disabled={submitting}>

          <label className="my-4 text-gray-400 uppercase">edit Title and Content</label>
          <input type="text" name="title" defaultValue={data.title.rendered}
            className="max-w-2xl my-4"
            {...register("title", {required: "title required"})}></input>
            {errors.title && (<p className="msg-error">{errors.title.message}</p>)}

          <textarea type="text" name="content"
          defaultValue={data.content.rendered}
          // dangerouslySetInnerHTML={{__html: data.content.rendered}}
            className="max-w-2xl h-40 my-4"
            {...register("content", {required: "content required"})}></textarea>
            {errors.content && (<p className="msg-error">{errors.content.message}</p>)}

        </fieldset>
          <div className="flex justify-between mx-auto max-w-2xl">
					  <button className="btn-primary">{submitting ? "Submitting..." : "Submit"}</button>
            <DeletePostBtn id={id} />
          </div>

          <SuccessMsg successMessage={"Update successful."} errorMessage={"Update unsuccessful. An error occured."} uploadStatus={uploaded} />

			</form>
      </div>
    </div>
    )
}

export default EditBlog