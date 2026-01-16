import Captain from "../models/captain.model.js";


 const createCaption = async ({
  firstname,
  lastname,
  email,
  password,
  color,
  model,
  plate,
  capacity,
  vehicleType,
}) => {
  if (
    !firstname ||
    !lastname ||
    !email ||
    !password ||
    !color ||
    !model ||
    !plate ||
    !capacity ||
    !vehicleType
  ) {
    throw new Error("All feilds are required");
  }

  const captain = await Captain.create({
    fullname:{
        firstname,
        lastname
    },
    email,
    password,
    vehicle:{
        color,
        model,
        plate,
        capacity,
        vehicleType
        
    }
  })
  return captain;
};


export default createCaption;
