import { createFileRoute } from "@tanstack/react-router";
import logo from "../images/boxcharter-logo.svg";
export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="p-2">
      <img
        src={logo}
        alt="the letters B, O, and X in horizontal, abutting squares, with the word 'charter' beneath"
      />
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
      <p style={{ fontFamily: "var(--font-family-sans-condensed)" }}>
        this is condensed
      </p>
    </div>
  );
}
