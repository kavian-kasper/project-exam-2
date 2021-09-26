import { useContext } from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { baseUrl } from "../../pages/api/api";
import { enableCorsUrl } from "../../pages/api/api";

export default function useAxios() {
	const [auth] = useContext(AuthContext);

	const apiClient = axios.create({
		baseURL: enableCorsUrl + baseUrl,
	});

	apiClient.interceptors.request.use(function (config) {
		const token = auth.data.token;
		config.headers.Authorization = token ? `Bearer ${token}` : "";
		console.log(config)
		return config;
	});

	return apiClient;
}