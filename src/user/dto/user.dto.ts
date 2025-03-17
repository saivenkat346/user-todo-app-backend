
import {  IsNotEmpty } from 'class-validator';

export class UserDTO{
    @IsNotEmpty()
    firstName:string;
    @IsNotEmpty()
    lastName:string;
    isActive:boolean;
}




