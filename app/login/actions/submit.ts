"use server";

import type { FormSchema } from "../../utils/zod";

const submit = async (body: FormSchema) => {
  return body;
};

export type SubmitAction = Awaited<ReturnType<typeof submit>>;

export default submit;
