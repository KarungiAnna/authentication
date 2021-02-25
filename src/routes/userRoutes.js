import { Router } from 'express';
import { homePage, signupPage, createUser, 
 // loginPage, 
  loginUser, studentProfile, adminDashboard,
fetchAllUsers } from '../controllers/userControllers';
import auth from '../middleware/auth.js'


const router = Router();
//Home page route
  router.get("/homepage", homePage);

// Users Registration/ signup Route
  router.get("/signup", signupPage);
  router.post("/signup", createUser);

  // Users Login Route
 // router.get("/login", loginPage);
  router.post("/login", loginUser);
  
  // Profile Route
  router.get("/profile", auth, studentProfile);

  // Dashboard route
  router.get("/dashboard", auth, adminDashboard);

  // Fetch all users route
  router.get("/users", auth, fetchAllUsers);
  
export default router;

