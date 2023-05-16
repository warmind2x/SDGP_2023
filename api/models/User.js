import { DataTypes } from "sequelize";
import { sequelize } from "/home/warmind2x/Documentos/SDGP_2023/database/database.js";

export const User = sequelize.define(
    "Users",
    {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nombre:{
            type: DataTypes.STRING,            
        },
        email:{
            type: DataTypes.STRING,
        },
        userId:{
            type: DataTypes.STRING,
            unique: true,
            
        },
        password:{
            type: DataTypes.STRING,
        },
        isSuperUser:{
            type: DataTypes.BOOLEAN
        }
    }
);