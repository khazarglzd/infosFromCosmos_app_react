
export default function Sidebar(props) {

    const { handleToggleModal } = props

    return (
        <div className="sidebar">
            <div onClick={handleToggleModal} className="bgOverlay"></div>
            <div className="sidebarContents" >
                <h2>The Brutal Martian Landscape</h2>
                <div>
                    <p>Description</p>
                    <p>utal Martian Landscaputal Martian Landscaputal Martian Landscaputal Martian Landscap</p>
                </div>
                <button onClick={handleToggleModal}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    )
}
