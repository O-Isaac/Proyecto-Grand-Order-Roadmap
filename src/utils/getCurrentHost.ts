import { headers } from "next/headers";

export default async function getCurrentHost(path?: string) {
  if (!path) path = "";

  const scheme =
    process.env.NODE_ENV === "development" ? "http://" : "https://";

  const { get } = await headers();

  return scheme + get("host") + path;
}
