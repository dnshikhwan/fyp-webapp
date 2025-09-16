import { useNavigate } from "@tanstack/react-router";
import { Button } from "./ui/button";
import image from "../assets/images/404.png";
import { Separator } from "./ui/separator";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen">
      <div className="h-1/2 md:h-2/3">
        <img src={image} alt="image" className="object-contain w-full h-full" />
      </div>
      <Separator />
      <div className="md:flex grid gap-5 items-center justify-around">
        <div>
          <h1 className="scroll-m-20 uppercase text-5xl md:text-9xl text-center md:text-left font-medium tracking-wider text-balance">
            Page Not
          </h1>
          <h1 className="scroll-m-20 uppercase text-5xl md:text-9xl text-center md:text-left font-medium tracking-wider text-balance">
            Found
          </h1>
        </div>
        <div
          className="flex flex-col md:block
		"
        >
          <h4 className="scroll-m-20 text-sm md:text-2xl font-semibold tracking-tight">
            We couldn't find the page you were looking for.
          </h4>
          <Button onClick={() => navigate({ to: "/" })} className="mt-4">
            Back to home
          </Button>
        </div>
      </div>
      <Separator />
    </div>
  );
};

export default NotFound;
