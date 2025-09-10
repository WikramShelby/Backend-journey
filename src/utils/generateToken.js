import jwt from "jsonwebtoken";

const generateToken = (id) => {
    return jwt.sign({ id }, "mySecretKey", {
        expiresIn: "30d",
    });
};

export default generateToken;
