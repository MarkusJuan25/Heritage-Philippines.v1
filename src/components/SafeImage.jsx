export default function SafeImage({ collapseParent = false, onError, ...props }) {
  const handleError = (event) => {
    if (collapseParent && event.currentTarget.parentElement) {
      event.currentTarget.parentElement.classList.add("is-empty");
    }

    event.currentTarget.style.display = "none";

    if (onError) {
      onError(event);
    }
  };

  return <img {...props} onError={handleError} />;
}
