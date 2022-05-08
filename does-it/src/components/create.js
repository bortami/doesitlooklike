import React, { useState } from "react";
import { useNavigate } from "react-router";
 
export default function Create() {
 const [form, setForm] = useState({
   name: "",
   position: "",
   level: "",
 });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new record to the database.
   const newPerson = { ...form };
 
   await fetch("http://localhost:5000/record/add", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newPerson),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ opt1: "", opt2: "", opt3: "", image: "" });
   navigate("/");
 }
 
 //display the form that takes the input from the user.
 return (
   <div>
     <h3>Create New observation</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="name">What do you think it looks like?</label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ opt1: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="position">What else could it be?</label>
         <input
           type="text"
           className="form-control"
           id="position"
           value={form.position}
           onChange={(e) => updateForm({ opt2: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="position">We need a third option. What's the third thing this thing could look like?</label>
         <input
           type="text"
           className="form-control"
           id="position"
           value={form.position}
           onChange={(e) => updateForm({ opt3: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="position">We're going to need photo proof. Upload your photo.</label>
         <input
           type="file"
           className="form-control"
           id="position"
           ref={this.fileInput}
           onChange={(e) => updateForm({ image: this.fileInput.current.files[0].name })}
         />
       </div>
       <div className="form-group">
         <input
           type="submit"
           value="Ask the masses"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}