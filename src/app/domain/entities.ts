export class Todo {
    id: string;
    desc: string;
    completed: boolean;
    userId: number;
}
export class User{
    id: string;
    username: string;
    password: string;
}
export class Auth{
    user:User;
    hasError: boolean;
    errMsg : string;
    redirectUrl: string;
}

export class Hero{
    

    constructor(
    private id: string,
    private name: string,
    private power: string,
    ){}
}

export class SuperPower{
    constructor(
    private id: string,
    private powername: string,
    ){}
}