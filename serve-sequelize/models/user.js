

 
    module.exports = function(sequelize,DataTypes){
        let User = sequelize.define('user',{
        id:{
            type:DataTypes.BIGINT,
            autoIncrement:true,
            primaryKey:true
        },
        firstName:{
            type:DataTypes.STRING

        },
        lastName:{
            type:DataTypes.STRING
        },
        userName:{
            type:DataTypes.STRING
        },
        gender:{
            type:DataTypes.STRING
        },
        email:{
            type:DataTypes.STRING
        },
        password:{
            type:DataTypes.STRING
        },
        confirmPassword:{
            type:DataTypes.STRING
        }

    })
    return User
    }