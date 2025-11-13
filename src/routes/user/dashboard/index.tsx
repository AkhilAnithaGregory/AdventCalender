import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/user/dashboard/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="p-2">
      <div>Hello "/user/dashboard/"!</div>
      <Link
        className="bg-blue-600 rounded-md text-white p-1"
        to="/"
      >
        Goto Home
      </Link>
    </div>
  );
}
