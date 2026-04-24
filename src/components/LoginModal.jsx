import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";

export default function LoginModal() {
  const { login } = useAuth();

  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("openLogin", handler);
    return () => window.removeEventListener("openLogin", handler);
  }, []);

  const updateField = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    setStatus("Signing in...");

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      login(data.token);
      setStatus("Welcome back.");

      window.location.href = "/member";
    } catch (err) {
      setStatus(err.message);
    }
  };

  if (!open) return null;

  return (
    <div className="auth-modal" role="dialog" aria-modal="true">
      <div className="auth-backdrop" onClick={() => setOpen(false)} />

      <div className="auth-box">
        <button className="auth-close" type="button" onClick={() => setOpen(false)}>
          x
        </button>

        <h2>Welcome back</h2>
        <p>Continue your journey with Heritage Philippines</p>

        <form onSubmit={submit} className="auth-form">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            onChange={updateField}
            required
          />

          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              onChange={updateField}
              required
            />

            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <div className="auth-extra">
            <button
              type="button"
              className="link-button"
              onClick={() => alert("Password reset coming soon")}
            >
              Forgot password?
            </button>
          </div>

          <button className="button button--primary" type="submit">
            Continue
          </button>

          {status && <p className="form-status">{status}</p>}
        </form>

        <div className="auth-divider">or continue with</div>

        <div className="auth-socials">
          <button type="button" disabled className="social-btn">
            <img src="/icons/google.svg" alt="Google" />
            Google
          </button>

          <button type="button" disabled className="social-btn">
            <img src="/icons/facebook.svg" alt="Facebook" />
            Facebook
          </button>
        </div>
      </div>
    </div>
  );
}
