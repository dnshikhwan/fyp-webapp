import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import logo from "../../assets/images/logo.png";

export const Route = createFileRoute("/auth/login")({
    component: Login,
});

function Login() {
    const navigate = useNavigate();
    return (
        <div className="flex items-center justify-center px-4 h-screen">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-center">
                        <img src={logo} alt="logo" className="w-32 mx-auto" />
                        Login to your account
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    required
                                    id="email"
                                    type="email"
                                    placeholder="johndoe@email.com"
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                    <Link
                                        to="/auth/forgot-password"
                                        className="text-xs ml-auto hover:underline underline-offset-4 leading-none text-gray-700 font-medium"
                                    >
                                        Forgot Password?
                                    </Link>
                                </div>
                                <Input
                                    required
                                    id="password"
                                    placeholder="**********"
                                    type="password"
                                />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter>
                    <Button
                        className="w-full"
                        onClick={() => navigate({ to: "/inventories" })}
                    >
                        Log in
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
