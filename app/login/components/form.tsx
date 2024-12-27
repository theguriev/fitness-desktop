"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import submitAction from "../actions/submit";
import type { SubmitAction } from "../actions/submit";
import { formSchema } from "../../utils/zod";
import type { FormSchema } from "../../utils/zod";
import ServerErrorMessage from "../../components/server-error-message";
import { DumbbellIcon } from "lucide-react";

const LoginForm = () => {
  const [submitState, setSubmitState] = useState<SubmitAction>();
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = async (body: FormSchema) => {
    setSubmitState(await submitAction(body));
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex w-full flex-col gap-y-4"
      >
        <div className="flex flex-col items-center gap-2">
          <a href="#" className="flex flex-col items-center gap-2 font-medium">
            <div className="flex h-8 w-8 items-center justify-center rounded-md">
              <DumbbellIcon className="size-6" />
            </div>
            <span className="sr-only">Fitness Inc.</span>
          </a>
          <h1 className="text-xl font-bold">Welcome to Fitness</h1>
          <div className="text-center text-sm">
            Don&apos;t have an account?{" "}
            <a href="#" className="underline underline-offset-4">
              Sign up
            </a>
          </div>
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="m@example.com"
                  autoFocus
                  {...field}
                  className="bg-background"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} className="bg-background" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <ServerErrorMessage response={submitState} />
        <Button name="submit" type="submit" disabled={!form.formState.isValid}>
          Login
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
