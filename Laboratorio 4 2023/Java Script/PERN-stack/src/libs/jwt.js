import jwt from "jsonwebtoken";

export const createAccessToken = (payload) => {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, "bbg123", { expiresIn: "1d" },
        (err, token) => {
            if (err) reject(err);
            resolve(token);
        });
    });
};