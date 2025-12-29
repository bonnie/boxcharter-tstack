import { createFileRoute } from "@tanstack/react-router";
import { SignIn } from "../components/SignIn/SignIn";

export const Route = createFileRoute("/sign-in")({
  component: SignInComp,
});

function SignInComp() {
  return <SignIn />;
}
