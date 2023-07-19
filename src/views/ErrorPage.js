import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const ErrorPage = () => {

    let history = useHistory();

    const handleReturnHome = () => {
        history.push('/');
    }

    return (
        <>
            <div className="not-found-container">
                <h4>This Page Isn't Available</h4>
                <h5>The link may be broken, or the page may have been removed</h5>
                <button
                    type="button"
                    onClick={() => handleReturnHome()}
                    className="btn btn-primary">Go to homepage</button>
            </div>
        </>
    )
}

export default ErrorPage;