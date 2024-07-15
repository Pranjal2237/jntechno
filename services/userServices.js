import axios from "axios";

export async function userLogin(data) {
  const user = await axios.post("http://localhost:3000/api/users/login", data);
  return user.data;
}

export async function userVerify() {
  if (sessionStorage.getItem("token")) {
    const token = sessionStorage.getItem("token");
    console.log(token);
    const verify = await axios.get(
      "http://localhost:3000/api/users/verifyToken",
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(verify.data);
    return verify.data;
  }
}
