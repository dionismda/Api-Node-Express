import { v4 as uuidV4 } from "uuid";

class BaseModel 
{
    private _id? : string;    

    constructor() {
        if(!this._id)
            this._id = uuidV4();
    }
    
    public get id (){
        return this._id;
    }
}

export { BaseModel }