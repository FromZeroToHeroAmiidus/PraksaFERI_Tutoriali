import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
import * as argon from 'argon2'
import { PrismaClient } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";


@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) {
    }
    
    async signup(dto: AuthDto) {
        // generate pass hash
        const hash = await argon.hash(dto.password);
        // save the new user in db
        try {
        const user = await this.prisma.user.create({
            data: {
                email: dto.email,
                hash,
            },
            // select: { // ne bi rad, da vnemo hash haha
            //     id: true,
            //     email: true,
            //     createdAt: true,
            // }
        })
        delete user.hash;
        // return saved user
        return user;
    }
 catch(error) {
        if (error instanceof PrismaClientKnownRequestError){
            if (error.code === 'P2002') {
                // 2002 duplicate napaka
                throw new ForbiddenException(
                    'Credentials taken',
                )
            }
        }
    }}

    signin() {
        return {msg : "I have signed in"}
    }
}