<template>
    <div>
        <el-table :data="data">
            <el-table-column label="name" prop="name" >
            </el-table-column>
            <el-table-column label="password" prop="password">
            </el-table-column>
            <el-table-column label='操作'>
            <template slot-scope="scope">
                <el-button @click="showScope(scope)">点击</el-button>   
            </template>
        </el-table-column>
        </el-table>
    </div>
</template>
<script>


export default {
    data() {
        return{
            data:[
                {
                    name:'zzz',
                    password:'12345'
                },
                {
                    name:'ccc',
                    password:'54321'
                }
            ]
        }
    },
    methods:{
        showScope(scope){
            console.log(scope);
        }
    }
    
}
</script>
