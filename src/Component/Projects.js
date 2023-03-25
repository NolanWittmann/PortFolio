import React, { useState } from 'react';
import ProjectCard from './ProjectCard';



const projets = [
    {
        name: "Advice Generator",
        project: "./assets/advice.png",
        link: "https://advice-1.herokuapp.com/"
    },
    {
        name: "Country Flags",
        project: "./assets/country.png",
        link: "https://country-1.herokuapp.com/"
    }
]



const Projects = () => {



    return (
        <div className='mesProjets'>

            <h1 className='projects__h1'>Mes projets</h1>
            <div className='projects'>

                <div className='projects__position'> {
                    projets.map((project, index) => {
                        return <ProjectCard name={project.name} project={project.project} link={project.link} index={index} />


                    })
                }
                </div>
            </div>


        </div >
    );
};

export default Projects;