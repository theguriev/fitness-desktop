"use server";

import type { FormSchema } from "../zod";

const submit = async (body: FormSchema) => {
  return body;
};

export type SubmitAction = Awaited<ReturnType<typeof submit>>;

export default submit;
