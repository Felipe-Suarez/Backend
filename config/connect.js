import { URL_MONGO, OPTIONS_MONGO } from "./index.js";

import mongoose from "mongoose";

mongoose.connect(URL_MONGO, OPTIONS_MONGO);