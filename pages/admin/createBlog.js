import { useState } from "react";
import { useForm } from "react-hook-form";
import useAxios from "../../components/hooks/useAxios";
import { useRouter } from "next/router";
import AdminNav from "../../components/nav/AdminNav";
import { blogpostUrl } from "../api/api";
import SuccessMsg from "../../components/common/SuccessMsg";

export const CreateBlog = () => {
    const [submitting, setSubmitting] = useState(false);
    const [uploaded, setUploaded] = useState(null)
    const router = useRouter();
    const http = useAxios();
    const { register, handleSubmit, formState: { errors }} = useForm();

    async function onSubmit(data) {
      setSubmitting(true);


      data.status = "publish";
      data.featured_media = null;

      try {
        const response = await http.post(blogpostUrl, data);
        console.log("response", response.data._links);
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
    <AdminNav />
    <div className=" flex flex-col justify-center items-center">
    <form className="w-full lg:w-8/12 bg-white shadow-md mt-12 rounded px-4 pt-6 pb-8 mb-4"
     onSubmit={handleSubmit(onSubmit)}>

				<fieldset disabled={submitting} className="flex flex-col items-center">

        <input type="text" name="title" placeholder="title" className="max-w-2xl my-4"
          {...register("title", {required: "title required"})} />
          {errors.title && (<p className="msg-error">{errors.title.message}</p>)}

        <textarea type="text" name="content" placeholder="content" className="max-w-2xl my-4"
          {...register("content", {required: "content required"})} />
          {errors.content && (<p className="msg-error">{errors.content.message}</p>)}

					<button className="btn-primary">{submitting ? "Submitting..." : "Submit"}</button>

      <SuccessMsg successMessage={"Upload successful."}
                  errorMessage={"Upload unsuccessful. An error occured."}
                  uploadStatus={uploaded} />

				</fieldset>
			</form>
      </div>
      </div>
  )
}

export default CreateBlog