import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

function getSessionSecret() {
  const s =
    process.env.JWT_SECRET?.trim() || process.env.ADMIN_SESSION_SECRET?.trim();
  if (!s) throw new Error("JWT_SECRET or ADMIN_SESSION_SECRET is not set");
  return new TextEncoder().encode(s);
}

export async function verifyAdminSession() {
  const token = (await cookies()).get("onyxx_admin")?.value;
  if (!token) redirect("/admin/login");
  try {
    const { payload } = await jwtVerify(token, getSessionSecret());
    if (payload.role !== "admin") redirect("/admin/login");
  } catch {
    redirect("/admin/login");
  }
}

/** Raw JWT for Authorization: Bearer when calling the Fastify API. */
export async function getAdminAccessToken(): Promise<string> {
  const token = (await cookies()).get("onyxx_admin")?.value;
  if (!token) redirect("/admin/login");
  try {
    const { payload } = await jwtVerify(token, getSessionSecret());
    if (payload.role !== "admin") redirect("/admin/login");
  } catch {
    redirect("/admin/login");
  }
  return token;
}
