import React from "react";
import "./Testimonial.css";

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  comment: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rafdah Ali",
    rating: 4,
    comment:
      "Great service! Highly recommended. The staff was very professional and courteous. I was impressed by the efficiency and quality of care.",
  },
  {
    id: 2,
    name: "Jane Smith",
    rating: 5,
    comment:
      "Excellent experience. Will definitely come back. The facility was clean and well-maintained, and the medical team provided exceptional care. I felt reassured throughout my visit.",
  },
  {
    id: 3,
    name: "Omar Ahmed",
    rating: 3,
    comment:
      "Good service, but could be improved. While the overall experience was satisfactory, there were some delays in receiving treatment. More efficient processes would enhance the experience.",
  },
  {
    id: 4,
    name: "Emily Brown",
    rating: 4,
    comment:
      "Friendly staff and quick service. The staff members were friendly and attentive, and I appreciated the promptness of the service. Overall, a positive experience.",
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="t-cont">
      <h1>Testimonials</h1>
      <div className="testimonials-container">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="testimonial-header">
              <h3>{testimonial.name}</h3>
              <div className="rating">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <span key={index} className="filled">
                    &#9733;
                  </span>
                ))}
                {[...Array(5 - testimonial.rating)].map((_, index) => (
                  <span key={index} className="empty">
                    &#9733;
                  </span>
                ))}
              </div>
            </div>
            <p className="comment">{testimonial.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
