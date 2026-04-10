"use client";

import { setApplicationStatus } from "../../actions";
import styles from "../../admin.module.scss";
import { useTransition } from "react";

const STATUSES = ["new", "reviewed", "shortlisted", "rejected", "archived"];

export function ApplicationStatusSelect({
  id,
  value,
}: {
  id: string;
  value: string;
}) {
  const [pending, start] = useTransition();

  return (
    <select
      className={styles.select}
      disabled={pending}
      value={value || "new"}
      onChange={(e) => {
        start(async () => {
          await setApplicationStatus(id, e.target.value);
        });
      }}
      aria-label="Submission status"
    >
      {STATUSES.map((s) => (
        <option key={s} value={s}>
          {s}
        </option>
      ))}
    </select>
  );
}
