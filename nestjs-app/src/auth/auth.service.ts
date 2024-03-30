import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";


@Injectable()
export class AuthService {


    constructor(private prisma: PrismaService) {

    }
    
    signup() {
        return { msg: "Hello" }
    }

    signin() {
        return {msg : "I have signed in"}
    }
}