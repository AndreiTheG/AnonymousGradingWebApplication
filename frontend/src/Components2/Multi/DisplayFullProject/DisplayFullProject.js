import React from 'react';

// import DisplayImages from '../../Multi/DisplayImages/DisplayImages';
// import ProjectPage from '../../../Containers2/ProjectPage/ProjectPage';
import classes from './DisplayFullProject.css';

// props
const DisplayFullProject = (props) => {
    return(
        <div className={classes.DisplayFullProject}>
            <h2>Project</h2>
            <div>
                <h3>Project Name:</h3>
                <p>{props.projectData.title}</p>
            </div>
            <div>
                <h3>Author:</h3>
                {/* <p>{props.projectData.author}</p> */}
            </div>
            <div>
                <h3>Full Description:</h3>
                {/* <p>{props.projectData.fullDescription}</p> */}
            </div>
            <div>
                <h3>Videoclip:</h3>
                {/* {props.projectData.ytLink === '' ? "This project has no video" : <iframe width="70%" height="420" title="Video" src={props.projectData.ytLink.replace("watch?v=", "embed/")} frameBorder="0" />} */}
            </div>
            {/* <div>
                <h3>Images:</h3>
                <div>{props.projectData.images === 'no-photo.jpg' ? "This project has no images" : <DisplayImages images={props.projectData.images}/>}</div>
            </div> */}
            {/* <div>
                <h3>Project Link:</h3>
                <a href={props.projectData.ghLink} target="_blank">{props.projectData.ghLink}</a>
            </div> */}
        </div>
    );
}

export default DisplayFullProject;