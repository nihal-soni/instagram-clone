import user from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES = process.env.JWT_EXPIRES;

export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(401).json({ message: "something is missing", success: false });
        }
        const user = await user.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "try different email", success: false });
        };
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await user.create({
            username,
            email,
            password: hashedPassword
        });
        return res.status(201).json({
            message: "User created successfully",
            success: true,
        })
    } catch (error) {

    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(401).json({
                message: "something is missing",
                success: false
            })
        }

        let user = await user.findOne({ email });
        if (!user) {
            return res.status(401).json({
                message: "user not found",
                success: false
            })
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(401).json({
                message: "invalid credentials",
                success: false
            })
        };

        user = {
            _id: user._id,
            username: user.username,
            email: user.email,
            profilePicture: user.profilePicture,
            bio: user.bio,
            followers: user.followers,
            followings: user.followings,
            posts: user.posts
        }
        const token = await jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { JWT_EXPIRES });
        return res.cookie('token', token, { httpOnly: true, sameSite: 'strict', maxAge: 1 * 24 * 60 * 60 * 1000 }).json({
            message: `Welcome back ${user.username}`,
            success: false,
            user
        })
    } catch (error) {
        console.log(error)
    }
}

export const logout = async (_, res) => {
    try {
        return res.cookie("token", "", { maxAge: 0 }.json({
            message: 'Logged out successfully.',
            success: true
        }))
    } catch (error) {
        console.log(error)
    }
}

export const getProfile = async (req, res) => {
    try {
        const userId = req.params.id;
        let user = await User.findById(userId);
        return res.status(200).json({
            user,
            success: true
        })
    } catch (error) {
        console.log(error)
    }
}
export const editProfile = async (req, res) => {
    try {
    //   const 
    } catch (error) {
        console.log(error)
    }
}