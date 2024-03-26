"use client"
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Loader2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"
import { RocketIcon } from "@radix-ui/react-icons"
import { useRouter } from 'next/navigation';

interface FormData {
  email: string;
  password: string;
}

interface ApiResponse {
  token: string;
}

export default function UserLogin() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState<Boolean>(false);
  const [loginFailed, setLoginFailed] = useState<Boolean>(false);
  const [loginSuccess, setLoginSuccess] = useState<Boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  // handling the form submit
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const BASE_URI = "https://beta.api.admin.ibharat.org";
    try {
      const response = await fetch(`${BASE_URI}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to login');
      }

      const data: ApiResponse = await response.json();

      // Store session ID in cookies
      document.cookie = `token=${data.token}; path=/`;

      // Store session ID in local storage
      localStorage.setItem('token', data.token);
      localStorage.setItem('userLogin', "true");
      setLoginSuccess(true);
    } catch (error:any) {
      console.log(error)
      console.error('Error:', error.message);
      setLoginFailed(true); // Set loginFailed to true if login fails
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (loginSuccess) {
      setTimeout(() => {
        router.push('/');
      }, 1000); // Redirect after 1 seconds
    }
  }, [loginSuccess, router]);

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Login to start</CardTitle>
          <CardDescription>
            Enter your email & password below to continue
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                ibharat
              </span>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" name="email" placeholder="m@example.com" value={formData.email} onChange={handleChange} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" name="password" value={formData.password} onChange={handleChange} />
          </div>
        </CardContent>
        <CardFooter>
          {loading ? (
            <Button disabled className='w-full'>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </Button>
          ) : (
            <Button type="submit" className="w-full">Continue</Button>
          )}
          {loginFailed && (
           <div className='absolute top-2 sm:top-10 right-2 sm:right-10'>
               <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Your credentials are invalid. Please log in again.
              </AlertDescription>
            </Alert>
           </div>
          )}
           {loginSuccess && (
           <div className='absolute top-2 sm:top-10 right-2 sm:right-10'>
               <Alert>
               <RocketIcon className="h-4 w-4" />
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>
                Login successful. Redirecting to home page...
              </AlertDescription>
            </Alert>
           </div>
          )}
        </CardFooter>
      </form>
    </Card>
  )
}
