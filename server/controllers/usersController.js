import io from '../index.js'
import * as userService from '../services/userService.js'

const getUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers()
        res.status(200).json(users)
    }
    catch(error) 
    {
        res.status(400).json({message: 'Error: ' + error})
    }
}
const getUserById = async (req, res) => {
    try {
        const users = await userService.getUserById(req.bopy.id)
        res.status(200).json(users)
    } catch (error) {
        res.status(400).json({message: 'Error: ' + error})
    }
} 
const addUsers = async (req, res) => {
    try {
        const newUser = await userService.createUser(req.body)
        io.emit('usersUpdated', newUser)
        res.status(200).json(newUser)
    } catch (error) {
        res.status(400).json({message: 'Error: ' + error})
    }
}
const modifyUserData = async ( req, res) => {
    try {
        const updatedUser = await userService.updateUser(req.body.id)
        io.emit('usersUpdated', updatedUser)
        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(400).json({message: 'Error: ' + error})
    }
}

export {
    getUsers,
    getUserById,
    addUsers,
    modifyUserData
}