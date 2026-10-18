import "./App.css";
import profileThumbnail from "./assets/profile-thumbnail.png";

function App() {
  return (
    <main>
      <article aria-label="Testimonial" className="testimonial">
        <figure className="testimonial-figure">
          <img
            src={profileThumbnail}
            alt=""
            height={48}
            width={48}
            className="testimonial-avatar"
          />
          <div className="testimonial-info">
            <span className="testimonial-name">Sarah Dole</span>
            <p className="testimonial-tag">@sarahdole</p>
          </div>
        </figure>
        <blockquote className="testimonial-text">
          <p>
            I've been searching for high-quality abstract images for my design
            projects, and I'm thrilled to have found this platform. The variety
            and depth of creativity are astounding!
          </p>
        </blockquote>
      </article>
    </main>
  );
}

export default App;
