import React from "react";
import Navbar from "./Navbar";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="container py-5">
        <h2 className="fw-bold text-primary mb-4">Contact Us</h2>
        <p className="text-muted">
          Have questions or feedback? Fill out the form below, and we’ll get back to you soon.
        </p>

        <form className="mt-4">
          <div className="mb-3">
            <label className="form-label">Your Name</label>
            <input type="text" className="form-control" placeholder="Enter your name" />
          </div>

          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" placeholder="Enter your email" />
          </div>

          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea className="form-control" rows="4" placeholder="Write your message"></textarea>
          </div>

          <button className="btn btn-primary w-100" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
