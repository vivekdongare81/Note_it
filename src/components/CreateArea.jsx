import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  const [check, setCheck] = useState(false);
  function extendInput() {
    setCheck(true);
  }

  return (
    <div>
      <form className="create-note">
        <input
          onClick={extendInput}
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        {check === true && (
          <div>
            <textarea
              name="content"
              onChange={handleChange}
              value={note.content}
              placeholder="Take a note..."
              rows="3"
            />
            <Zoom in="true">
              <Fab
                onClick={submitNote}
                size="large"
                color="primary"
                aria-label="add"
              >
                <AddIcon size="large" />
              </Fab>
            </Zoom>
          </div>
        )}
      </form>
    </div>
  );
}

export default CreateArea;
