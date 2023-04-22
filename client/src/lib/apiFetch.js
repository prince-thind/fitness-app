import { toast } from "react-toastify";

const origin = ""; //origin is same for deployment, for development it's proxied in vite config

export default async function apiFetch(path, props = {}) {
  try {
    const res = await fetch(origin + path, {
      method: props.method ?? "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(props.body),
    });

    let result = null;
    try {
      result = await res.json();
    } catch (e) {
      throw { error: { code: e.code, message: "Invalid JSON from server" } };
    }

    if (result.error) {
      throw result.error;
    }

    return result.data;
  } catch (e) {
    toast.error(e.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    console.error(e);
    return { error: { code: e.code, message: e.message } };
  }
}
