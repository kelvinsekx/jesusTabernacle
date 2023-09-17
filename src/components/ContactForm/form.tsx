"use client"

import * as z from "zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {Button} from "@/components/ui/button"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const formSchema = z.object({
  name: z.string().trim().min(2).max(50),
  email: z.string().email(),
  subject: z.string().min(2).max(50),
  phone_number: z.string().max(15),
  message: z.string().min(2).max(200),
})

export function ContactForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  })
 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    const res = await fetch('/api/resend_mail', {
      method: 'POST',
      body: JSON.stringify(values)
    })
    
    console.log(await res.json())
  }

  return (
    <Card>
      <CardHeader className="text-center">
        <CardDescription>ENQUIRES AND FEEDBACK</CardDescription>
        <CardTitle>Send a message</CardTitle>
        <CardDescription>Can’t find what you’re looking for? Need help? Feel free to send us a message.</CardDescription>
      </CardHeader>
      <CardContent>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-col px-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className=" w-full">
                <FormLabel>Name</FormLabel>
                <FormControl className="">
                  <Input placeholder="name" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className=" w-full">
                <FormLabel>Email</FormLabel>
                <FormControl className="">
                  <Input placeholder="yxy@gmail.com" {...field} />
                </FormControl>
                <FormDescription>
                  Put your valid email here.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem className=" w-full">
                <FormLabel>Subject</FormLabel>
                <FormControl className="">
                  <Input placeholder="subject" {...field} />
                </FormControl>
                <FormDescription>
                  This is the title of your mail
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone_number"
            render={({ field }) => (
              <FormItem className=" w-full">
                <FormLabel>Phone Number</FormLabel>
                <FormControl className="">
                  <Input placeholder="23 4513 33" {...field} />
                </FormControl>
                <FormDescription>
                  Put your phone number here
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className=" w-full">
                <FormLabel>Message</FormLabel>
                <FormControl className="">
                  <Textarea placeholder="your intent" {...field} />
                </FormControl>
                <FormDescription>
                  Your message here.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="bg-tb-green w-1/2 m-auto">Send</Button>
        </form>
      </Form>
    </CardContent>
    </Card>
  )
}
