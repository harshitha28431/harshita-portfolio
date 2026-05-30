"use strict";
"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertTriangle, Loader2 } from "lucide-react";
import confetti from "canvas-confetti";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        // Confetti explosion!
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to send message.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <form className="contact-form glass-card" onSubmit={handleSubmit}>
      <h3 className="form-title">Send a Message</h3>
      
      <div className="input-group">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="John Doe"
        />
      </div>

      <div className="input-group">
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="john@example.com"
        />
      </div>

      <div className="input-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Hi Harshitha, I would love to talk about..."
        />
      </div>

      <button type="submit" className="btn btn-primary btn-submit" disabled={status === "loading"}>
        {status === "loading" ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={18} />
            Send Message
          </>
        )}
      </button>

      {status === "success" && (
        <div className="status-banner success">
          <CheckCircle2 size={18} />
          <span>Your message has been sent successfully!</span>
        </div>
      )}

      {status === "error" && (
        <div className="status-banner error">
          <AlertTriangle size={18} />
          <span>{errorMessage}</span>
        </div>
      )}

      <style jsx>{`
        .contact-form {
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-title {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        label {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        input, textarea {
          padding: 0.85rem 1rem;
          border-radius: var(--border-radius-md);
          background: var(--bg-primary);
          border: 1px solid var(--card-border);
          color: var(--text-primary);
          font-size: 1rem;
          outline: none;
          transition: all 0.3s ease;
        }

        input:focus, textarea:focus {
          border-color: var(--primary-color);
          box-shadow: 0 0 0 3px var(--primary-glow);
        }

        .btn-submit {
          justify-content: center;
          width: 100%;
          margin-top: 0.5rem;
        }

        .status-banner {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem;
          border-radius: var(--border-radius-md);
          font-weight: 500;
          font-size: 0.95rem;
          margin-top: 0.5rem;
          animation: slideUp 0.3s ease-out;
        }

        .status-banner.success {
          background-color: rgba(16, 185, 129, 0.15);
          color: var(--success-color);
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .status-banner.error {
          background-color: rgba(239, 68, 68, 0.15);
          color: var(--error-color);
          border: 1px solid rgba(239, 68, 68, 0.3);
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-spin {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </form>
  );
}
