
export default function Footer(props) {

    const { showModal, handleToggleModal } = props

    return (
        <footer>
            <div>
                <h2>The Brutal Martian Landscape</h2>
                <h1>INFOS FROM COSMOS</h1>
            </div>
            <button onClick={handleToggleModal}>
                <i className="fa-solid fa-circle-info"></i>
            </button>
        </footer>
    )
}
