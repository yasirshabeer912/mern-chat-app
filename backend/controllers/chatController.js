const asyncHandler = require('express-async-handler');

const accessChat = asyncHandler(async (req, res) => {})
const fetchChats = asyncHandler(async (req, res) => {})
const createGroupChat = asyncHandler(async (req, res) => {})
const addToGroup = asyncHandler(async (req, res) => {})
const renameGroup = asyncHandler(async (req, res) => {})
const removeFromGroup = asyncHandler(async (req, res) => {})


module.exports = {renameGroup,addToGroup,removeFromGroup,createGroupChat,fetchChats,accessChat}