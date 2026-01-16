import Captain from "../models/captain.model.js";
import createCaption from "../services/caption.service.js";
import { validationResult } from "express-validator";


const registerCaptain = async (req,res, next) =>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const {fullname , email , password , vehicle}= req.body;

    const duplicate = await Captain.findOne({ email });
  if (duplicate) {
    res.status(401).json({ message: "email already exist" });
  } 

    const hashedPassword= await Captain.hashPassword(password);

    const captain = await createCaption({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password:hashedPassword,
        color:vehicle.color,
        model:vehicle.model,
        plate:vehicle.plate,
        capacity:vehicle.capacity,
        vehicleType:vehicle.vehicleType
    })

    const token = captain.generateAuthToken();
    res.status(201).json({token,captain})
}


export {registerCaptain}