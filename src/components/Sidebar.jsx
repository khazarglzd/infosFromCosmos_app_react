
export default function Sidebar(props) {

    const { handleToggleModal, data } = props

    return (
        <div className="sidebar">
            <div onClick={handleToggleModal} className="bgOverlay"></div>
            <div className="sidebarContents" >
                <h2>{data?.title}</h2>
                <div className="descriptionContainer">
                    <p>{data?.date}</p>
                    <p className="descriptionTitle">{data?.explanation}</p>

                </div>
                <button onClick={handleToggleModal}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    )
}
