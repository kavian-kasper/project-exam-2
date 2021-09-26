import { useState } from "react";
import useAxios from "../hooks/useAxios";
import { useRouter } from "next/router";
import { blogpostUrlSuffix } from "../../pages/api/api";
import SuccessMsg from "../common/SuccessMsg";

const DeletePostBtn = ({ id }) => {
    const [deleted, setDeleted] = useState(null)
    const [submitting, setSubmitting] = useState(false);

    const http = useAxios();

    const router = useRouter();

    async function handleDelete() {
        const confirmDelete = window.confirm("Delete this post?");

        if (confirmDelete) {
            try {
                setSubmitting(true)

                await http.delete(blogpostUrlSuffix + id);

                setDeleted(true)

                setTimeout(() => {
                    router.push("/admin")
                }, 1500)
            }   catch (error) {
                console.log(error)

                setDeleted(false)
                setSubmitting(false);
            } finally {
            setSubmitting(false);
          }
        }
    }

    return (
    <div>
        <button type="button" className="p-2 bg-red-500 text-white rounded hover:bg-blue-400 duration-300"
        onClick={handleDelete}>{submitting ? "Deleting..." : "Delete"}</button>
        <SuccessMsg successMessage={"Deletion successful."}
                  errorMessage={"Deletion unsuccessful. An error occured."}
                  uploadStatus={deleted} />
    </div>
    )
}

export default DeletePostBtn
