// TODO:
//   style confirmation email from Supabase
//   warn about confirmation email from Supabase

import Button from "../Button";
import Card from "../Card";
import styles from "./Auth.module.css";

export function Auth({
  actionText,
  onSubmit,
  status,
  afterSubmit,
}: {
  actionText: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  status: "pending" | "idle" | "success" | "error";
  afterSubmit?: React.ReactNode;
}) {
  return (
    <Card>
      <div className={styles.wrapper}>
        <h1>{actionText}</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(e);
          }}
          className={styles.form}
        >
          <label htmlFor="email" className={styles.label}>
            email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className={styles.input}
          />
          <label htmlFor="password" className={styles.label}>
            password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className={styles.input}
          />
          <div></div>
          <Button
            type="submit"
            className={styles.button}
            disabled={status === "pending"}
            isLoading={status === "pending"}
          >
            {actionText}
          </Button>
          {afterSubmit ? afterSubmit : null}
        </form>
      </div>
    </Card>
  );
}

export default Auth;
