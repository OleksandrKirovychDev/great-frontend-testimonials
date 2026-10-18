import "./App.css";
import profileThumbnail from "./assets/profile-thumbnail.png";

function App() {
  return (
    <main>
      <figure className="testimonial">
        <figcaption className="testimonial-author">
          <img
            src={profileThumbnail}
            alt=""
            height={48}
            width={48}
            className="testimonial-avatar"
          />
          <div className="testimonial-info">
            <p className="testimonial-name">Sarah Dole</p>
            <p className="testimonial-tag">@sarahdole</p>
          </div>
        </figcaption>
        <blockquote className="testimonial-text">
          <p>
            I've been searching for high-quality abstract images for my design
            projects, and I'm thrilled to have found this platform. The variety
            and depth of creativity are astounding!
          </p>
        </blockquote>
      </figure>
    </main>
  );
}

export default App;
