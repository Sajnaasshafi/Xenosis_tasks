import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import './App.css';


export default function Form() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    message: "",
    rating: 4,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);


    setFormData({
      firstName: "",
      email: "",
      message: "",
      rating: 4,
    });

    
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleRatingChange = (value) => {
    setFormData((prevState) => ({ ...prevState, rating: value / 20 }));
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Feedback Form</h2>
      <p className="form-description">
        Please take a moment give us your Feedback.
      </p>
      {isSubmitted && (
        <div className="success-message">Thank you for your Feedback</div>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="form-input"
            placeholder="Enter First Name"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="form-label">
            Your email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            placeholder="abc@geeksforgeeks.org"
            required
          />
        </div>
        <div>
          <label htmlFor="rating" className="form-label">
            Rating
          </label>
          <Rating
            ratingValue={formData.rating * 20} 
            onClick={handleRatingChange}
          />
        </div>
        <div>
          <label htmlFor="message" className="form-label">
            Your comment
          </label>
          <textarea
            name="message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            className="form-textarea"
            placeholder="Write your comment here..."
          />
        </div>
        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
    </div>
  );
}
