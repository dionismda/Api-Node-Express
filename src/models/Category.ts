import { BaseModel } from "./BaseModel";

class Category extends BaseModel
{
    private _name : string;
    private _description : string;
    private _created_at : Date;
    
    constructor(name:string, description:string){

        super();
        
        this._name = name;
        this._description = description;
        this._created_at = new Date();
    }

    public get name(){
        return this._name;
    }

    public get description(){
        return this._description;
    }

    public get created_at(){
        return this._created_at;
    }
    
}

export { Category };