import React, { useState } from "react"
import uuid from "react-uuid";

function NoteForm({handleAdd}){

    const [text, setText] = useState("");

    const handleSubmit = (event)=>{
        event.preventDefault();
        if (text.trim().length > 0){
            const id = uuid()
            handleAdd({id,text})
            setText("");
        }
        

    }
    return(
        <div className="noteForm">
            <form onSubmit={handleSubmit}>
                <textarea
                    rows="15" cols="60" className="new" value={text} onChange={(event) => {
                        setText(event.target.value)
                    }} />
                <button className="enregistrer">Enregistrer</button>
            </form>
        </div>
    )
}

export default NoteForm