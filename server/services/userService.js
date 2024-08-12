import User from "../models/user.model.js"

const getAllUsers = async () => {
    return await User.find()
}

const getUserById = async (id) => {
    return await User.findById(id)
}

const createUser = async (newUser) => {
    return await User.create(newUser)
}

const modifyUserData = async (id, modifiedUser) => {
    return await User.findByIdAndUpdate(id, modifiedUser)
}

export {
    getAllUsers,
    getUserById,
    createUser,
    modifyUserData
}