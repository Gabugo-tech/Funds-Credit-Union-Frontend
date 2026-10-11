import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset Password",
  description:
    "Reset your Funds Credit Union account password. Enter your email address and we'll send you a secure reset link.",
  alternates: {
    canonical: "https://fundscreditunion.vercel.app/forgot-password",
  },
  robots: {
    index: false, // no value in indexing a password-reset page
    follow: false,
  },
};

export default function ForgotPasswordLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
