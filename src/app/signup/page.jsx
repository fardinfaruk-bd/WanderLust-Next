"use client"
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const SignUpPage = () => {
    const OnSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData.entries());
        
        const {data: res, error} = await authClient.signUp.email({
            email: user.email,
            password: user.password,
            name: user.name,
            image: user.image 
        })

        if (error) {
            toast.error(error.message)
        }
        if (res) {
            await authClient.signOut();
            toast.success("Sign up successfully")
            redirect("/login")

        }
    }
    return (
        <div className="max-w-7xl mx-auto min-h-screen flex flex-col justify-center items-center space-y-2">
            <div className="text-center">
                <h1 className="text-4xl font-bold">Create Account</h1>
                <p className="text-[#6c696d]">Start your adventure with Wanderlust</p>
            </div>
            <Card className="border border-gray-100 rounded-none">
                <Form className="flex w-96 flex-col gap-4 py-10 px-3" onSubmit={OnSubmit} >
                    <TextField

                        isRequired
                        name="name"
                        type="text"
                    >
                        <Label>Full Name</Label>
                        <Input placeholder="Enter your full name" className="rounded-none bg-gray-100" />
                        <FieldError />
                    </TextField>

                    <TextField

                        isRequired
                        name="image"
                        type="text"
                    >
                        <Label>Image URL</Label>
                        <Input placeholder="Enter your image URL" className="rounded-none bg-gray-100" />
                        <FieldError />
                    </TextField>

                    <TextField

                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email Address</Label>
                        <Input placeholder="john@example.com" className="rounded-none bg-gray-100" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" className="rounded-none bg-gray-100" />
                        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>
                    
                    <div className="flex flex-col gap-2">
                        <Button type="submit" className="w-full rounded-none bg-[#15a1bf]">
                            <Check />
                            Create Account
                        </Button>
                        <div className="text-center">
                            <p className="text-[#6c696d]">Or sign up with</p>
                        </div>
                        <Button  variant="outline" className="w-full rounded-none mb-2">
                            <FcGoogle />
                            Login With Google
                        </Button>
                        <hr />
                        <div className="text-center">
                            <p className="text-[#6c696d]">Already have an account? <Link href="/login" className="text-[#15a1bf]">Login</Link></p>
                        </div>
                    </div>
                </Form>

            </Card>
        </div>
    );
};

export default SignUpPage;