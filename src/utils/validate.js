export function nameRules(rule,value,callback){
    let reg=/^[a-zA-Z0-9_-]{4,10}$/
    if(value==='')
    callback(new Error("用户名不能为空"))
    else if(!reg.test(value))
    callback(new Error("请输入4-10位用户名"))
    else
    callback()
}

export function passwordRules(rule,value,callback){
    let pass=/^\S*(?=\S{6,12})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/
    if(value==='')
    callback(new Error("密码不能为空"))
    else if(!pass.test(value))
    callback(new Error("请输入6-12位密码，需包含大小写字母和数字及特殊符号"))
    else
    callback()
}