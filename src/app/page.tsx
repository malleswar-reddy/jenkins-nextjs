import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold">Welcome to Orders Tracker</h1>
      <p className="mt-4 text-lg">
        Your one-stop solution for order management.
      </p>
      <Image
        src="/images/hero-image.png"
        alt="Orders Tracker Hero Image"
        width={500}
        height={300}
        className="mt-8 rounded-lg shadow-lg"
      />
      <h1>Hello Welcome to Jenkins Todo</h1>
      <p className="mt-4 text-lg">
        Your one-stop solution for order management.
      </p>
    </div>
  );
}
