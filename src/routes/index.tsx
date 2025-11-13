import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ModeToggle } from "@/components/ui/mode-toggle";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <div className="flex justify-end">
        <ModeToggle />
      </div>
      <h3>Welcome Home!</h3>
      <Link
        className="bg-blue-600 rounded-md text-white p-1"
        to="/user/dashboard"
      >
        Goto Dashboard
      </Link>
    </div>
  );
}
