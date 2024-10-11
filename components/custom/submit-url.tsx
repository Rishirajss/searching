"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { toast } from "@/components/ui/use-toast";
import { Loader } from "lucide-react";
import { useState } from "react";

const FormSchema = z.object({
  url: z.string().url({ message: "Invalid URL" }),
  email: z.string().email({ message: "Invalid email address" }),
});

async function checkUrlExists(url: string) {
  const res = await fetch("/api/url-exists", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url }),
  });

  const result = await res.json();
  return result.exists;
}

async function submitCustomDomain(data: {
  protocol: string;
  domain: string;
  tld: string;
}) {
  const res = await fetch("/api/custom-domain", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to submit custom domain");
  }

  return res.json();
}

export default function SubmitUrlForm() {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setLoading(true);
    try {
      const urlExists = await checkUrlExists(data.url);

      if (!urlExists) {
        toast({
          title: "URL does not exist!",
          description: "Please check the URL and try again.",
        });
        setLoading(false);
        return;
      }
      const urlObj = new URL(data.url);

      // Extract protocol, domain, and TLD
      const protocol = urlObj.protocol.split(":")[0];
      const hostnameParts = urlObj.hostname.split(".");
      const domain = hostnameParts[hostnameParts.length - 2];
      const tld = hostnameParts[hostnameParts.length - 1];

      // Extract the last part of the path if it exists
      let path = urlObj.pathname.split("/").filter(Boolean).pop();

      const postData = { protocol, domain, path, tld };

      await submitCustomDomain(postData as any);

      toast({
        title: "Website URL submitted",
        description: "Thank you for your submission!",
      });
    } catch (error) {
      console.error("Error submitting URL:", error);
      toast({
        title: "Something went wrong!",
        description: "Make sure the URL is correct, else try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full md:w-2/5 space-y-6"
      >
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Website URL</FormLabel>
              <FormControl>
                <Input placeholder="https://example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="your@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={loading}>
          {loading ? (
            <Loader className="animate-spin w-4 h-4 mr-2" /> // Loader icon with animation
          ) : (
            "Submit"
          )}
        </Button>
      </form>
    </Form>
  );
}
