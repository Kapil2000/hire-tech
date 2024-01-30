import scheduleMeet from "../models/schedule-meeting.js";

const hireCandidate = async (req,res)=>{
    try {
        res.status(200).send("Hire a candidate");
    } catch (error) {
        console.log(error)
    }
}

const scheduleMeeting = async (req,res)=>{
    try {
        const {date, time} = req.body;
        const userTime = await scheduleMeet.create({date, time});
        res.status(200).json({msg:userTime});
    } catch (error) {
        console.log(error)
    }
}
export {hireCandidate, scheduleMeeting};