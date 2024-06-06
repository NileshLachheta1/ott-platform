
import User from '../models/user.model.js';

const registerUser = async (req, res) => {
    const { fullName, number, time, platForm } = req.body;
    console.log("Time", fullName, number, time, platForm);
    const [hours, minutes] = time.split(':').map(Number);
    const start = new Date();
    start.setHours(hours, minutes, 0, 0);
    console.log("Current Time :", start);
    let end = new Date(start.getTime() + 5 * 60 * 1000);
    end = new Date(end.getTime() - 2000);
    console.log("Start date", start)
    console.log("Start date", end)
    try {
        const newUser = new User({
            name: fullName,
            contactNumber: number,
            startTime: start,
            endTime: end,
            ottPlatform: platForm
            endTime: end,
            ottPlatform:platForm,

        });
        await newUser.save();
        console.log("newUser : ", newUser)
        res.status(201).json(newUser);
    } catch (error) {
        console.log("Error : ", error)
        res.status(500).json({ message: 'Server error', error });
    }
};

const timeChange = async (req, res) => {
    const { time } = req.query;
    console.log(" timeonchange Time : ", time);
    const [hours, minutes] = time.split(':').map(Number);
    const start = new Date();
    start.setHours(hours, minutes, 0, 0);
    console.log("Current Time :", start);
    let end = new Date(start.getTime() + 5 * 60 * 1000);
    end = new Date(end.getTime() - 2000);
    console.log("Start date", start)
    console.log("Start date", end)
    try {
        console.log("inside try")
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
        console.log("AcriveUser : ", activeUsersByPlatform)
            return res.status(200).json({activeUsersByPlatform});

    } catch (error) {
        console.log("Error : ", error)
        res.status(500).json({ message: 'Server error', error });
    }
}
const deactivateUsers = async (req, res, next) => {
    console.log("Call the Deactive User Page : ")
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
