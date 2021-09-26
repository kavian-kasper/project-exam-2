import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/router";
import { useContext ,useState } from "react";
import AuthContext from "../context/AuthContext";
import SuccessMsg from "./common/SuccessMsg";


const LoginForm = () => {
    const [submitting, setSubmitting] = useState(false)
    const [loading, setLoading] = useState("")
    const [loginSuccess, setLoginSuccess] = useState(null)

    const [, setAuth] = useContext(AuthContext)

    const { register, handleSubmit, formState: { errors }} = useForm();

    const router = useRouter();
        async function onSubmit(data) {
            setSubmitting(true);
            setLoading("Loading...");

            try {
                const response  =  await axios.post("https://braanaas.org/semester-assignment/wp-json/jwt-auth/v1/token", data);
                console.log(response.data);
                setAuth(response.data)
                setLoginSuccess(true)
                setTimeout(() => {
                    router.push("/admin")
                  }, 1500)

            } catch(error) {
                console.log(error)
                setLoginSuccess(false)

            } finally{
                setSubmitting(false);
                setLoading("");
             }
        }

        return(
            <div className="w-full max-w-xs mx-auto h-screen">
            <form className="bg-white shadow-md mt-12 rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>

                <fieldset disabled={submitting}>

                    <div className="my-4">
                        <label>Username</label>
                        <input type="text" name="username" placeholder="username"
                        {...register("username", {required: "Username required",})}
                        />
                        {errors.username && (<p className="msg-error">{errors.username.message}</p>)}
                    </div>


                    <div className="my-4">
                        <label>Password</label>
                            <input type="password" name="password" placeholder="password"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            {...register("password", {required: "Password required",})}
                            />
                        {errors.password && (<p className="msg-error">{errors.password.message}</p>)}
                    </div>

                    <div className="w-full">
                        <button disabled={submitting} className="btn-primary mt-4 w-full" type="submit">LOG IN</button>
                        <div className="text-black text-xs italic;">{loading}</div>
                    </div>

                    <SuccessMsg successMessage={"Login successful."}
                  errorMessage={"Login unsuccessful. Try again."}
                  uploadStatus={loginSuccess} />

                </fieldset>

            </form>
            </div>
        )
    }

export default LoginForm
