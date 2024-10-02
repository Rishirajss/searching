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

// Schema validation using Zod
const FormSchema = z.object({
  url: z.string().url({ message: "Invalid URL" }), // Validates that the string is a URL
  email: z.string().email({ message: "Invalid email address" }), // Validates that the string is an email
});

// Function to extract URL details (protocol, domain, TLD)
function extractUrlDetails(urlString: string) {
  try {
    const url = new URL(urlString);
    const protocol = url.protocol;
    const domainParts = url.hostname.split(".");
    const domain = domainParts.slice(0, -1).join("."); // Handles subdomains
    const tld = domainParts[domainParts.length - 1]; // Extracts TLD
    return { protocol, domain, tld };
  } catch (error) {
    throw new Error("Invalid URL format");
  }
}

export default function SubmitUrlForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  // Handle form submission
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const isLiveURL = process.env.NEXT_PUBLIC_IS_LIVE_URL;
    const submitURL = process.env.NEXT_PUBLIC_SUBMIT_URL;
    const urlExists = await fetch(`${isLiveURL}`, {
      method: "POST",
      body: JSON.stringify({ url: data.url }),
    });

    if (!urlExists) {
      toast({
        title: "Invalid URL",
        description: "The URL provided doesn't exist or is unreachable.",
      });
      return; // Stop submission if URL doesn't exist
    }

    try {
      // Extract protocol, domain, and TLD
      const { protocol, domain, tld } = extractUrlDetails(data.url);

      // Prepare the data to post
      const post_data = { protocol, domain, tld };

      // POST request to backend
      const res = await fetch(`${submitURL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post_data),
      });

      // Handle response
      if (!res.ok) {
        throw new Error("Failed to submit URL");
      }

      // Success toast notification
      toast({
        title: "Website URL submitted",
        description: "Thank you for your submission!",
      });
    } catch (error) {
      // Error toast notification
      toast({
        title: "Something went wrong!",
        description: "Make sure the URL is correct, or try again later.",
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full md:w-2/5 space-y-6"
      >
        {/* URL input field */}
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

        {/* Email input field */}
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

        {/* Submit button */}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
