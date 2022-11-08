import service from "../../service";
import qs from 'qs'
export function login(data){
    return new service({
        method:'post',
        url:'/login',
        data:data
    })
}

//获取学生列表
export function students(params){
    return new service({
        method:'get',
        url:'/students', 
        params
    })
}

// export function query(params){
//     return new service({
//         method:'get',
//         url:`/students?name=${params}`, 
//     })
// }


//删除学生信息
export function delStudent(id){
    return new service({
        method:'delete',
        url:`/students/${id}`,
    })
}



//新增信息列表
export function addInfo(data){
    data=qs.stringify(data)
    return new service({
    method:'post',
    url:'/info',
    data
})
}

//获取信息列表
export function getInfo(){
    return new service({
        method:'get',
        url:'/info',
    })

}
