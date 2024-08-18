import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
    notStarted: true,
  });
  let num = 1;
  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {!note.notStarted && (
          <div>
            <input
              name="title"
              onChange={handleChange}
              value={note.title}
              placeholder="Title"
            />
            <Zoom in={true}>
              <Fab onClick={submitNote}>
                <AddIcon />
              </Fab>
            </Zoom>
          </div>
        )}

        <textarea
          onClick={() => setNote((prev) => ({ ...prev, notStarted: false }))}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={note.notStarted ? 1 : 3}
        />
      </form>
    </div>
  );
}

export default CreateArea;
