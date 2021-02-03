import { Router } from 'express';
//const router = require('express').Router();
import { auth, createUser, loginUser, serializeUser, checkRole } from '../controllers/userControllers';
//import { auth } from '../middleware/auth';

const router = Router();


//router.post('/users', createUser);
//router.get("/users", fetchAllUsers);
//router.post('/users/login', loginUser);

// Users Registeration Route
/*router.post("/register-user", async (req, res) => {
     await createUser(req.body, "user", res);
  });*/
  router.post("/register-user", createUser);
  
  // Admin Registration Route
 /* router.post("/register-admin", async (req, res) => {
    await createUser(req.body, "admin", res);
  });*/
  router.post("/register-admin", createUser);
  // Super Admin Registration Route
  router.post("/register-super-admin", async (req, res) => {
    await createUser(req.body, "superadmin", res);
  });
  
  // Users Login Route
  /*router.post("/login-user", async (req, res) => {
    await loginUser(req.body, "user", res);
  });*/
   router.post("/login-user", loginUser);
  
  // Admin Login Route
 /* router.post("/login-admin", async (req, res) => {
    await loginUser(req.body, "admin", res);
  });*/
  router.post("/login-admin", loginUser);
  
  // Super Admin Login Route
  router.post("/login-super-admin", async (req, res) => {
    await loginUser(req.body, "superadmin", res);
  });
  
  // Profile Route
 /* router.get("/profile", auth, async (req, res) => {
    return res.json(serializeUser(req.user));
  });
  
  // Users Protected Route
  router.get(
    "/user-protectd",
    auth,
    checkRole(["user"]),
    async (req, res) => {
      return res.json("Hello User");
    }
  );
  
  // Admin Protected Route
  router.get(
    "/admin-protectd",
    auth,
    checkRole(["admin"]),
    async (req, res) => {
      return res.json("Hello Admin");
    }
  );
  
  // Super Admin Protected Route
  router.get(
    "/super-admin-protectd",
    auth,
    checkRole(["superadmin"]),
    async (req, res) => {
      return res.json("Hello Super Admin");
    }
  );
  
  // Super Admin Protected Route
  router.get(
    "/super-admin-and-admin-protectd",
    auth,
    checkRole(["superadmin", "admin"]),
    async (req, res) => {
      return res.json("Super admin and Admin");
    }
  );*/
  
  //module.exports = router;
export default router;

