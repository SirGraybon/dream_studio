import "../styles/spinner.css";

export default function LoadingSpinner() {
  return (
    <div className="spinner-container">
      <div>Generating Dream</div>
      <div className="loading-spinner">
      </div>
    </div>
  );
}