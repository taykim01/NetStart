import "./loading.css"

export default function Loading(props: any) {
    return (
        <div className="loading-screen">
            <div className="loader">
                <span className="loader-text">loading</span>
                <span className="load"></span>
            </div>
        </div>
    )
}