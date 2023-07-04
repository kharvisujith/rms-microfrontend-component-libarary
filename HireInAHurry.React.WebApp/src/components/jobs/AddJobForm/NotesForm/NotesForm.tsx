import React from "react";

const NotesForm = ({ register }: any) => {
  return (
    <>
      <div className="main-add-job" data-testid="notes-form-comp">
        <label className="main-add-job-label">Notes</label>

        <textarea
          style={{ resize: "none" }}
          className="main-job-textarea-input"
          placeholder=""
          {...register("notes", { required: false })}
        />
      </div>
      <div className="job-next-btn">
        <label></label>
        <button role="dialog-submit" className="job-next-btn" type="submit">
          Save
        </button>
      </div>
    </>
  );
};

export default NotesForm;
