import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/forgot-password")({
    component: ForgotPassword,
});

function ForgotPassword() {
    return (
        <div className="flex flex-col px-4 gap-6 items-center justify-center h-screen">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Forgot Password?
            </h3>
            <Card className="w-full max-w-md">
                <CardContent>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="johndoe@email.com"
                            required
                        />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="w-full">Send reset email</Button>
                </CardFooter>
            </Card>
            <Link
                to="/auth/login"
                className="text-xs hover:underline underline-offset-4 leading-none text-gray-700 font-medium"
            >
                Back to log in
            </Link>
        </div>
    );
}
