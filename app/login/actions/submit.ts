"use server";

// import { redirect } from "next/navigation";

// import passSetCookie from "@/app/utils/passSetCookie";
// import { api } from "@/lib/openapi/apiClient";

import type { FormSchema } from "../zod";

const submit = async (body: FormSchema) => {
  // const request = await api.authorization("/login", "post", {
  //   headers: { "Content-Type": "application/json" },
  //   body,
  // });

  // const response = await request.json();
  // passSetCookie(request.headers.getSetCookie());
  // if (request.status === 200) {
  //   redirect("/app");
  // }
  return body;
};

export type SubmitAction = Awaited<ReturnType<typeof submit>>;

export default submit;
