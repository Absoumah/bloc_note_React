
import { MdDelete } from 'react-icons/md';
import React from "react"
function Note ({note,handleDelete,handleUpdate}){
    return (
        <div className='notes-list'>
            <div className="note">
                <textarea className='noteArea' value={note.text} onChange={(event) => {
                    handleUpdate(note.id, event.target.value)
                }} />
                <div className='note-footer'>
                    <MdDelete onClick={() => handleDelete(note.id)} className="delete-icon" />
                </div>
            </div>

        </div>

    )
}

export default Note