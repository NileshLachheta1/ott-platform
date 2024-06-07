
import User from '../models/user.model.js';

const registerUser = async (req, res) => {
    const { fullName, number, time, platForm } = req.body;
    const [hours, minutes] = time.split(':').map(Number);
    const start = new Date();
    start.setHours(hours, minutes, 0, 0);
    let end = new Date(start.getTime() + 4 * 60 * 60 * 1000);
    end = new Date(end.getTime() - 2000);
    try {
        const newUser = new User({
            name: fullName,
            contactNumber: number,
            startTime: start,
            endTime: end,
            ottPlatform: platForm
        });
        await newUser.save();
        res.status(200).json({message:"Registration succesfully completed",newUser});
    } catch (error) {
        res.status(500).json({message:"Registration incompleted please try again" });
    }
};

const timeChange = async (req, res) => {
    const { time } = req.query;
    const [hours, minutes] = time.split(':').map(Number);
    const start = new Date();
    start.setHours(hours, minutes, 0, 0);
    let end = new Date(start.getTime() + 4 * 60 * 60 * 1000);
    end = new Date(end.getTime() - 2000);
    try {
        const activeUsersByPlatform = await User.aggregate([
            { $match: { startTime: { $lte: start }, active: true } },
            {
                $group: {
                    _id: "$ottPlatform",
                    count: { $sum: 1 }
                }
            },
            {
                $project: {
                    _id: 0,
                    ottPlatform: "$_id",
                    count: 1
                }
            }
        ]);
        return res.status(200).json({ activeUserList : activeUsersByPlatform });

    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}
const deactivateUsers = async (req, res, next) => {
    const now = new Date();
    try {
        await User.updateMany(
            { endTime: { $lte: now }, active: true },
            { $set: { active: false } }
        );
        next();
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export { registerUser, deactivateUsers, timeChange };
