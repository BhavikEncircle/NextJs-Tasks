import { login } from "../actions/auth";
export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-md h-100 flex flex-col justify-center bg-gray-800 rounded-xl shadow-lg px-8 py-10">
        <h1 className="text-3xl font-bold text-center text-gray-200 mb-6">
          Login
        </h1>

        <form action={login} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-200 mb-1"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Hint : admin"
              required
              className="w-full px-4 py-2 border rounded-lg "
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-lg font-medium text-gray-200 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Hint : 123456"
              required
              className="w-full px-4 py-2 border rounded-lg "
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-500 text-white text-xl mt-2 py-2 rounded-lg font-medium hover:bg-gray-900 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
