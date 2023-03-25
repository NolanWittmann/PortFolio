import React from 'react';

const ProjectCard = (props) => {
    return (
        <div className='projectCard'>
            <h1 className='projectCard__h1'>{props.name}</h1>
            <div className='projectCard__display'>
                <a href={props.link}><img className='projectCard__img' src={props.project} alt={props.index} /></a>
            </div>

        </div>
    );
};

export default ProjectCard;