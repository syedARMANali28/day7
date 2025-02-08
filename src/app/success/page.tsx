import Link from "next/link";

const SuccessPage = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold text-green-600">Payment Successful! 🎉</h1>
        <p className="mt-4 text-gray-600">Thank you for your purchase.</p>
        <p className="text-gray-600">You will receive an order confirmation email shortly.</p>

        <div className="mt-6">
          <Link
            href="/"
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </main>
  );
};

export default SuccessPage;
