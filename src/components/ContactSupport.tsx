"use client";

import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  username: z.string().min(4, {
    message: "Username must be at least 4 characters.",
  }),
});

const ContactSupport = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <section className="w-full flex flex-col md:flex-row h-full  gap-6 my-12">
      <div className="flex flex-col w-1/2 h-full justify-between">
        <h2 className="font-semibold text-4xl ">Contact Support</h2>
        <p className="text-xl">Answer as soon as possible</p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 h-full ">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <>
                  <div className="flex justify-between gap-4 h-16">
                    <FormItem className="w-1/2 h-full">
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Ali Original"
                          {...field}
                          className="border-[#F19AA6] h-full border-2"
                        />
                      </FormControl>
                    </FormItem>
                    <FormItem className="w-1/2 h-full">
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="admin@gmail.com"
                          {...field}
                          className="border-[#F19AA6] h-full border-2"
                        />
                      </FormControl>
                    </FormItem>
                  </div>
                  <FormItem className="">
                    <FormLabel>your massage</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="tell me every thing...."
                        {...field}
                        className="border-[#F19AA6] h-52 border-2"
                      />
                    </FormControl>
                  </FormItem>
                </>
              )}
            />
            <Button type="submit" className="bg-[#F19AA6] mx-auto w-full text-2xl bottom-0">
              Submit
            </Button>
          </form>
        </Form>
      </div>

      <Image
        src="/images/happy-call-center-agent.png"
        alt="Person review image"
        width={540}
        height={100}
        className=" rounded-2xl border-[#202020] p-1 w-1/2"
      />
    </section>
  );
};

export default ContactSupport;
