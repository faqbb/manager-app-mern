import Log from '../models/log.model.js'

const getLogs = async () => {
    return await Log.find()
}

const createLog = async (newLog) => {
    return await Log.create(newLog)
}

const deleteLog = async (id) => {
    return await Log.findByIdAndDelete(id)
}

export {
    getLogs,
    createLog,
    deleteLog
}