import { useState } from "react";
const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [time, setTime] = useState("");
  const [reminder, setReminder] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("PLEASE ADD A TASK");
      return;
    }
    onAdd({ text, time, reminder });
    setText("");
    setTime("");
    setReminder(false);
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>TASK</label>
        <input
          type="text"
          placeholder="ADD TASK"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>TIME</label>
        <input
          type="text"
          placeholder="ADD TIME"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>SET REMINDER</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input className="btn btn-block" type="submit" value="SAVE TASK" />
    </form>
  );
};
export default AddTask;
