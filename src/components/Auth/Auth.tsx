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
    <div className={styles.wrapper}>
      <div className={styles.authBox}>
        <h1>{actionText}</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(e);
          }}
          className={styles.form}
        >
          <div className={styles.inputWrapper}>
            <label htmlFor="email" className={styles.label}>
              email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className={styles.input}
            />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="password" className={styles.label}>
              password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className={styles.input}
            />
          </div>
          <button
            type="submit"
            className={styles.button}
            disabled={status === "pending"}
          >
            {status === "pending" ? "..." : actionText}
          </button>
          {afterSubmit ? afterSubmit : null}
        </form>
      </div>
    </div>
  );
}

export default Auth;
