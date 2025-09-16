import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button onClick={() => navigate({ to: "/auth/login" })}>Log in</Button>
    </div>
  );
}
