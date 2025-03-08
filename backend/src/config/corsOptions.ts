import cors from "cors";
import { allowedOrigins } from "./allowedOrigins";
const corsOptions: cors.CorsOptions = {
  origin: (
    origin: string | undefined,
    callback: (err: Error | null, origin?: boolean) => void
  ) => {
    if (allowedOrigins.indexOf(origin!) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
};
export default corsOptions;
