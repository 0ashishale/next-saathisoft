import { useEffect } from "react";

// Progress bar
function ProgressUp() {
  const progressBar = document.querySelector(".progress-bar");
  if (!progressBar) return; // Check if progressBar is null

  const totalHeight = document.body.scrollHeight - window.innerHeight;
  const progress = (window.pageYOffset / totalHeight) * 100;
  progressBar.style.width = progress + "%";
}

// Progress circle
function updateProgressCircle() {
  const progressElement = document.querySelector(".progress-circle-bar");
  const scrollToTopElement = document.querySelector(".scroll-to-top");
  if (!progressElement || !scrollToTopElement) return; // Check if elements are null

  const totalHeight = document.body.scrollHeight - window.innerHeight;
  let progress = (window.pageYOffset / totalHeight) * 283;
  progress = Math.min(progress, 283);
  progressElement.style.strokeDashoffset = 283 - progress;

  if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
    scrollToTopElement.style.opacity = "1";
  } else {
    scrollToTopElement.style.opacity = "0";
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const MyComponent = () => {
  useEffect(() => {
    // Add event listeners
    window.addEventListener("scroll", updateProgressBar);
    window.addEventListener("resize", updateProgressBar);
    window.addEventListener("scroll", updateProgressCircle);
    window.addEventListener("resize", updateProgressCircle);

    // Initial update
    updateProgressBar();
    updateProgressCircle();

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener("scroll", updateProgressBar);
      window.removeEventListener("resize", updateProgressBar);
      window.removeEventListener("scroll", updateProgressCircle);
      window.removeEventListener("resize", updateProgressCircle);
    };
  }, []); // Empty dependency array ensures that this effect runs only once on mount

  return (
    <div className="progress-circle-container">
      <svg className="progress-circle" viewBox="0 0 100 100">
        <circle className="progress-background" cx="50" cy="50" r="45"></circle>
        <circle className="progress-circle-bar" cx="50" cy="50" r="45"></circle>
      </svg>
      <div className="scroll-to-top" onClick={scrollToTop}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </div>
    </div>
  );
};

export default ProgressUp;
