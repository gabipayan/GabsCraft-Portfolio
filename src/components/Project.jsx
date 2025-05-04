   // src/components/Project.jsx
   import React from 'react';

   const Project = ({ title, image, appLink, repoLink }) => {
     return (
       <div className="project">
         <h3>{title}</h3>
         <img src={image} alt={title} />
         <p>
           <a href={appLink} target="_blank" rel="noopener noreferrer">View App</a> | 
           <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
         </p>
       </div>
     );
   };

   export default Project;