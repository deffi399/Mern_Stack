const RenderingMeths = () => {
    let studentName = "Arun"
    let age = 22
    let course = "React"
    let fees = 15000

    let skills = ["HTML", "CSS", "JavaScript", "React", "Node"]

    let student = {
        name: "Priya",
        age: 21,
        course: "MERN Stack",
        city: "Chennai"
    }

    let students = [
        { id: 1, name: "Arun", course: "React" },
        { id: 2, name: "Priya", course: "Node" },
        { id: 3, name: "Kumar", course: "MongoDB" }
    ]

    return (
        <div style={{padding:"20px", fontFamily:"Arial", background:"#f5f5f5"}}>

            <div style={{background:"white", padding:"15px", margin:"15px", borderRadius:"10px"}}>
                <h2>String number rendering</h2>
                <h3>{studentName}</h3>
                <h3>{age}</h3>
                <h3>{course}</h3>
                <h3>{fees}</h3>
            </div>

            <div style={{background:"white", padding:"15px", margin:"15px", borderRadius:"10px"}}>
                <h2>Array Rendering</h2>
                {skills.map((e, i) => (
                    <li key={i}>{e}</li>
                ))}
            </div>

            <div style={{background:"white", padding:"15px", margin:"15px", borderRadius:"10px"}}>
                <h2>Object Rendering</h2>
                <h3>{student.name}</h3>
                <h3>{student.age}</h3>
                <h3>{student.course}</h3>
                <h3>{student.city}</h3>
            </div>

            <div style={{background:"white", padding:"15px", margin:"15px", borderRadius:"10px"}}>
                <h2>Array of Object</h2>
                {students.map((e) => (
                    <div key={e.id}>
                        <li>{e.name}</li>
                        <li>{e.course}</li>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default RenderingMeths