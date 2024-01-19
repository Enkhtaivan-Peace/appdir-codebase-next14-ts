import { jwtDecode } from "jwt-decode";

export async function decodeToken(token:string) {
    return jwtDecode(token)
}