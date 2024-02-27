import express from "express";
import { createUser, bookVisit, getAllBookings, cancelBooking, toFav, getAllFavorites } from "../controllers/userCntrl.js";
import jwtCheck from "../config/auth0Config.js";

const router = express.Router();

router.post("/register", createUser);
router.post("/bookVisit/:id", bookVisit);
router.post("/getAllBookings", getAllBookings);
router.post("/removeBooking/:id", cancelBooking);
router.post("/toFav/:rid", toFav);
router.get("/allFav/", getAllFavorites);

export { router as userRoute };