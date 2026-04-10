import Link from "next/link";
import styles from "../admin.module.scss";

export default function AdminHomePage() {
  return (
    <main className={styles.adminMain}>
      <h1 className={styles.adminTitle}>Dashboard</h1>
      <p className={styles.adminSubtitle}>
        Manage talent applications, roster images, and editorial campaigns. All mutations run through
        the Fastify API in <code style={{ color: "#c9a84c" }}>/backend</code>.
      </p>
      <div className={styles.card}>
        <h2 className={styles.adminTitle} style={{ fontSize: "1.1rem" }}>
          Quick links
        </h2>
        <ul style={{ marginTop: "1rem", lineHeight: 2, color: "#a09888" }}>
          <li>
            <Link href="/admin/applications" style={{ color: "#c9a84c" }}>
              Model submissions
            </Link>{" "}
            — review apply-form entries
          </li>
          <li>
            <Link href="/admin/roster" style={{ color: "#c9a84c" }}>
              Roster
            </Link>{" "}
            — add/update talent cards & photos
          </li>
          <li>
            <Link href="/admin/editorial" style={{ color: "#c9a84c" }}>
              Recent campaigns
            </Link>{" "}
            — editorial grid imagery
          </li>
        </ul>
      </div>
    </main>
  );
}
