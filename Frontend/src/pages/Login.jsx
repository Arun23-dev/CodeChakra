import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const strongPasswordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const signupSchema = z
  .object({
    firstName: z.string().min(3, "First name must be at least 3 characters"),
    email: z
      .string()
      .email("Invalid email address")
      .refine((val) => val.endsWith("@gmail.com"), {
        message: "Email must be a Gmail address",
      }),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(
        strongPasswordRegex,
        "Password must include uppercase, lowercase, number, and special character"
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signupSchema) });

  const submittedData = (data) => console.log(data);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit(submittedData)}
        className="bg-white shadow-md rounded-lg p-8 w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Login </h2>

      

        <div>
          <input
            {...register("email")}
            placeholder="Enter your emailId"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <input
            {...register("password")}
            type="password"
            placeholder="Enter your password"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>

       

        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
        >
          Login
        </button>
      </form>
    </div>
  );
}
