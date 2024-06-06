
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
        //     console.log("inside try")
        //     const usersCount = await User.countDocuments({
        //         startTime: { $lte: end },
        //         endTime: { $gte: start }
        //     });
        //     console.log("count : ", usersCount)
        //     if (usersCount >= 5) {
        //         return res.status(400).json({ message: 'Registration limit reached for this time slot' });
        //     }
        const newUser = new User({
            name: fullName,
            contactNumber: number,
            startTime: start,
            endTime: end
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
    const {time} = req.query;
    console.log(" timeonchange Time : ", time);
    const [hours, minutes] = time.split(':').map(Number);
    const start = new Date();
    start.setHours(hours, minutes, 0, 0);
    console.log("Current Time :", start);
    // const start = new Date(time);
    let end = new Date(start.getTime() + 5 * 60 * 1000);
    // Subtract 2 seconds (2000 milliseconds) from the end time
    end = new Date(end.getTime() - 2000);
    console.log("Start date", start)
    console.log("Start date", end)
    try {
        console.log("inside try")
        // const usersCount = await User.countDocuments({
        //     startTime: { $lte: end },
        //     endTime: { $gte: start }
        // });
        const activeUsersByPlatform = await User.aggregate([
            // Match documents where the start time is less than or equal to the given start time
            { $match: { startTime: { $lte: start }, active: true } },
            // Group by the ottPlatform field and count the number of users for each platform
            {
                $group: {
                    _id: "$ottPlatform",
                    count: { $sum: 1 }
                }
            },
            // Project the fields to rename _id to ottPlatform and add a count field
            {
                $project: {
                    _id: 0,
                    ottPlatform: "$_id",
                    count: 1
                }
            }
        ]);
        console.log("count : ", activeUsersByPlatform)
            return res.status(200).json({activeUsersByPlatform});

    } catch (error) {
        console.log("Error : ", error)
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

export { registerUser, deactivateUsers ,timeChange };
