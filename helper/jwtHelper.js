import jwt from 'jsonwebtoken';

export const jwtDecode = (token)=>{
    return jwt.decode(token);
}