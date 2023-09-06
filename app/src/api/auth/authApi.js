import axios from "axios";
import decoder from "jwt-decode";

const URL = "http://localhost:5000/api/user";

const registration = async (email, password) => {
  const { data } = await axios.post(`${URL}/reg`, { email, password });
  localStorage.setItem("token", data.token);
  return decoder(data.token);
};

const login = async (email, password) => {
  const { data } = await axios.post(`${URL}/login`, { email, password });
  localStorage.setItem("token", data.token);
  return decoder(data.token);
};

const checkAuthorization = async () => {
  const token = localStorage.getItem("token");

  const { data } = await axios({
    method: "get",
    url: URL + "/auth",
    headers: { Authorization: "Bearer " + token },
  });

  return decoder(data.token);
};

export default { login, checkAuthorization, registration };
