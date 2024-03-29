import express from "express";

import * as AuthentificationController from "../Controllers/authentification.js";
import * as projectController from "../Controllers/projects.js";
import* as judgmentController from '../Controllers/judgment.js';
import* as requirementController from '../Controllers/requirement.js';

import {protect , authorize} from '..//Middleware/authentification.js';



const router = express.Router();

//rewuirememts
//router.get('/requirement/:id', requirementController.getProjectRequirements);
//router.put('/requirement_add/:id', requirementController.updateProjectRequirements);
//judgments
router.post('/judgment/create/:id', judgmentController.createJudgment); // DONE

router.get('/judgment/sent', judgmentController.getSentJudgments);
router.get('/judgment/:id', judgmentController.getJudgmentsForProject);

//authentification
router.post('/register', AuthentificationController.register);// DONE
router.post('/login', AuthentificationController.login);// DONE

// router.put('/updatedetails',protect, AuthentificationController.updateDetails);

router.get('/me', protect , AuthentificationController.getMe); // DONE

//router.put('/updatepassword', AuthentificationController.updatePassword);

//project
router.post('/project', protect, authorize('student', 'judge', 'admin'), projectController.createProject); // DONE
router.get('/project/:id', protect, projectController.getProjectById);
router.get('/projects', protect, authorize('judge', 'professor', 'admin', 'student'), projectController.getProjects);
// router.get('/project/user/:userId', protect, projectController.getProjectByUser);
router.put('/project/:id', protect, authorize('student', 'judge', 'admin'), projectController.updateProject);
router.delete('/project/:id', protect, authorize('student', 'judge', 'admin'), projectController.deleteProject);


export {router};




// import express from "express";

// import * as AuthentificationController from "../Controllers/authentification.js";
// import * as projectController from "../Controllers/projects.js";
// import* as judgmentController from '../Controllers/judgment.js';
// import* as requirementController from '../Controllers/requirement.js';

// import {protect , authorize} from '..//Middleware/authentification.js';



// const router = express.Router();

// //rewuirememts
// //router.get('/requirement/:id', requirementController.getProjectRequirements);
// //router.put('/requirement_add/:id', requirementController.updateProjectRequirements);
// //judgments
// router.post('/create', judgmentController.createJudgment);
// router.get('/sent', judgmentController.getSentJudgments);
// router.get('/project/:id', judgmentController.getJudgmentsForProject);
// //authentification
// router.post('/register', AuthentificationController.register);//bine
// router.post('/login', AuthentificationController.login);//bine
// router.put('/updatedetails', AuthentificationController.updateDetails);


// //router.put('/updatepassword', AuthentificationController.updatePassword);


// router.get('/auth/me', protect , AuthentificationController.getMe);



// //project
// router.post('/project', projectController.createProject);
// router.get('/project/:id', projectController.getProjectById);
// router.get('/projects', projectController.getProjects);
// router.get('/project/user/:userId', projectController.getProjectByUser);
// router.put('/project/:id', projectController.updateProject);
// router.delete('/project/:id', projectController.deleteProject);


// export {router};


