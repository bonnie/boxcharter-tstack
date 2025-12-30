import { createFileRoute } from "@tanstack/react-router";
import Logo from "~/components/Logo";
export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="p-2">
      <Logo />
      <p>
        <strong>Beautiful</strong> box charts (measures with chords and lyrics)
        made <strong>easy</strong>
      </p>
      <h3
        style={{
          fontFamily: "var(--font-family-sans)",
          fontWeight: "var(--font-weight-extrabold)",
        }}
      >
        This is a title
      </h3>
      <p
        style={{
          fontFamily: "var(--font-family-sans-condensed)",
          fontVariationSettings: '"wdth" 75',
        }}
      >
        this is condensed
      </p>
    </div>
  );
}
