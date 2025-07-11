import { useState } from "react";

export default function Form(){
    const [formData, setFormData]=useState({
        name: "",
        email: "",
        birthdate: "",
        resume:null,
        relocate:"",
    })
    const handleChange =(e)=>{
        const {name, value, type, checked, files}=e.target;

        if(type === 'file'){
            setFormData({
                ...formData,
                [name]: files[0],
            })
        }else {
            setFormData({
                ...formData,
                [name]: value,
            })
        }
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formData);
    }


    return(
        <form onSubmit={handleSubmit} className=" flex flex-col items-center gap-2 shadow-xl m-3 p-4 " >
            <h1 className="text-xl font-bold">Job Application Form</h1>
            <div>
                <label>Name:</label><br/>
                <input name="name" type="text" value={formData.name} onChange={handleChange}  className="w-full border border-black p-2 rounded" required/>
            </div>
            <div>
                <label>Email:</label><br/>
                <input name="email" type="email" vlaue={formData.email} onChange={handleChange}  className="w-full border border-black p-2 rounded" required/>

            </div>
            <div>
                <label>BirthDate: </label><br/>
                <input name="birthDate" type="date" value={formData.birthdate} onChange={handleChange}  className="w-full border border-black p-2 rounded"/>
            </div>

            <div>
                <label>Resume</label>
                <input name="resume" type="file" accept=".pdf, .doc, .docx" onChange={handleChange}  className="w-full" required></input>
            </div>

            <div>
                <label>Willing to Relocate?</label>
                <div className="flex flex-col">
                    <label>
                        <input type="radio" name="relocate" value="yes" checked={formData.relocate==='yes'}  onChange={handleChange}  className="mr-2"/>Yes
                    </label>
                    <label>
                        <input type="radio" name="relocate" value="no" checked={formData.relocate === 'no'}  onChange={handleChange}  className="mr-2"/>No                    
                    </label>
                </div>
            </div>

            <button className="border border-black bg-blue-500 text-white text-xl  rounded p-2 ">Submit</button>
        </form>
    )
}