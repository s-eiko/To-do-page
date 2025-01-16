import { useEffect, useRef } from "react";

export default function OpeningModal({ open, handleCloseDialog }) {
    const dialog = useRef();

    useEffect(() => {
        if (open) {
            dialog.current.showModal();
        } else {
            dialog.current.close();
        }
    }, [open]);

    function handleChangeName(event) {
        localStorage.setItem(
            "name",
            event.target.value
        );
    }

    function handleSubmit() {
        handleCloseDialog();
    }

    return (
        <dialog ref={dialog}>
            <form id="nameForm" onSubmit={handleSubmit}>
                <p>What's your name?</p>
                <div id="inputarea">
                    <textarea id="nameArea" cols='20' rows='1' onChange={handleChangeName}></textarea>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </dialog>
    );
}