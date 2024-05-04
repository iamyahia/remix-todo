import { useSearchParams } from "@remix-run/react";
import Login from "~/components/Login";
import Signup from "~/components/Signup";

export default function Auth() {
  const [searchParams] = useSearchParams();

  const authMode = searchParams.get("mode");

  if (authMode === "signup") return <Signup />;

  return <Login />;
}
