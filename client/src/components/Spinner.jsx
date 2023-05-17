// This component renders a spinning loading indicator in the center of the screen.
// It uses Bootstrap's spinner component to display the animation.

export default function Spinner() {
    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="sr-only"></span>

            </div>
        </div>
    )
}