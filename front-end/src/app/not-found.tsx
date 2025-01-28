import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen text-primary">
      <h1>Not found – 404!</h1>
      <div className="mt-10">
        <Link href="/" className="btn btn-primary">
          Go back to Home
        </Link>
      </div>
    </div>
  );
}
