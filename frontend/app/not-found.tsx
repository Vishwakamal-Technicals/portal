import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="case-page">
      <div className="container">
        <p className="eyebrow">Not Found</p>
        <h1>Requested page is not available</h1>
        <p>The page you requested does not exist or has been moved.</p>
        <Link href="/" className="btn btn-primary">
          Return to Home
        </Link>
      </div>
    </main>
  );
}
