import { fetchApplicationsJson } from "../../actions";
import styles from "../../admin.module.scss";
import { ApplicationStatusSelect } from "./ApplicationStatusSelect";

function fmtPhotos(photo_urls: unknown): string {
  if (photo_urls == null) return "—";
  if (Array.isArray(photo_urls)) return `${photo_urls.length} file(s)`;
  if (typeof photo_urls === "object")
    return `${Object.keys(photo_urls as object).length} ref(s)`;
  return String(photo_urls);
}

export default async function AdminApplicationsPage() {
  const { applications } = await fetchApplicationsJson();

  return (
    <main className={styles.adminMain}>
      <h1 className={styles.adminTitle}>Model submissions</h1>
      <p className={styles.adminSubtitle}>
        Applications submitted through the public apply form (handled by{" "}
        <code style={{ color: "#c9a84c" }}>POST /api/applications</code> on the Node server).
      </p>

      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Status</th>
              <th>Name</th>
              <th>Email</th>
              <th>DOB</th>
              <th>City</th>
              <th>Experience</th>
              <th>Photos</th>
              <th>Submitted</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((row) => (
              <tr key={String(row.id)}>
                <td>
                  <ApplicationStatusSelect
                    id={String(row.id)}
                    value={String(row.status ?? "new")}
                  />
                </td>
                <td>{String(row.full_name ?? "")}</td>
                <td>
                  <a href={`mailto:${row.email}`} style={{ color: "#c9a84c" }}>
                    {String(row.email ?? "")}
                  </a>
                </td>
                <td>{String(row.date_of_birth ?? "")}</td>
                <td>{String(row.city ?? "—")}</td>
                <td>{String(row.experience_level ?? "—")}</td>
                <td>{fmtPhotos(row.photo_urls)}</td>
                <td style={{ whiteSpace: "nowrap" }}>
                  {row.created_at
                    ? new Date(String(row.created_at)).toLocaleString()
                    : "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {applications.length === 0 ? (
        <p className={styles.adminSubtitle}>No submissions yet.</p>
      ) : null}
    </main>
  );
}
