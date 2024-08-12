import { Router } from "express"
import { createLog, deleteLog, getLogs } from "../controllers/logController.js"

// Set router
const logRouter = Router()

// Define Handlers
logRouter.get('/', getLogs)
logRouter.post('/createLog', createLog)
logRouter.delete('/deleteLog', deleteLog)


export default logRouter