import {createUser} from "../model/user";
import moment from "moment";

/**
 * 메뉴 항목을 추가한다.
 * @param {Context} id 항목에 대한 고유 식별자
 * @param {Object} url 항목 아이콘
 * @returns {boolean} 성공 여부
 */
export async function signUp(ctx, args){
    console.log(args);
    await createUser(ctx,{
        phone: args.phone,
        password: args.password,
        name: args.name,
        birthDate: args.birthDate,
        joinDate: moment().unix(),
        isActive: true,
        isAdmin: false,
    });
}