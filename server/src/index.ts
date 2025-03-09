import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";

/* IMPORT ROUTES */
import { authMiddleware } from "./middleware/authMiddleware";
import tenantRoutes from "./routes/tenantRoutes";
import managerRoutes from "./routes/managerRoutes";
import propertyRoutes from "./routes/propertyRoutes";

/* CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

/* ROUTES */
app.use("/tenants", authMiddleware(["tenant"]), tenantRoutes);
app.use("/managers", authMiddleware(["manager"]), managerRoutes);
app.use("/properties", propertyRoutes);

/* LISTEN */
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
