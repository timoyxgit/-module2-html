import { useState } from "react";

function Skills() {
    const [visible, setVisible] = useState(true);
    
    return (
        <>
            <button onClick={() => setVisible(!visible)}>
                Show/Hide Skills
            </button>
            {visible && (
                <section className="card" id="skillsSection">
                    <h2>Skills</h2>
                    <ul>
                        <li>Web Development</li>
                        <li>New skill HTML</li>
                        <li>On Progress SQL</li>
                    </ul>
                </section>
            )}
        </>
    );
}

export default Skills;
