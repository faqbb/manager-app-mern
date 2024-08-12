import io from '../index.js'
import * as logService from '../services/logService.js'

const getLogs = async (req, res) => {
    try {
        const logs = await logService.getLogs()
        res.status(200).send(logs)
    } catch (error) {
        res.status(400).send(error)
    }
}

const createLog = async (req, res) => {
    try {
        const newLog = await logService.createLog(req.body)
        io.emit('logsUpdated', newLog)
        res.status(200).send(newLog)
    } catch (error) {
        res.status(400).send(error)
    }
}

const deleteLog = async (req, res) => {
    try {
        const targetLog = await logService.deleteLog(req.body.id)
        io.emit('logsUpdated', targetLog)
        res.status(200).send(targetLog)
    } catch (error) {
        res.status(400).send(error)
    }
}

export {
    getLogs,
    createLog,
    deleteLog
}