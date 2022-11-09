<template>
    <div class="infoList">
        <el-form :inline="true"  class="demo-form-inline">
            <el-form-item >
                <el-button type="primary" @click="addStudent()">新增</el-button>
            </el-form-item>
        </el-form> 


        <el-table :data="TableData" border style="width: 100%">
            <el-table-column prop="name" label="姓名" align="center">
            </el-table-column>
            <el-table-column prop="sex_text" label="性别" align="center">
            </el-table-column>
            <el-table-column prop="age" label="年龄" align="center">
            </el-table-column>
            <el-table-column prop="father" label="父亲" align="center">
            </el-table-column>
            <el-table-column prop="mother" label="母亲" align="center">
            </el-table-column>
            <el-table-column prop="address" label="家庭住址" align="center">
            </el-table-column>
            <el-table-column prop="time" label="入校时间" align="center">
            </el-table-column>
            <el-table-column prop="phone" label="联系方式" align="center">
            </el-table-column>
            <el-table-column  label="操作" align="center" width="200px">
                <template slot-scope="scope">
                    <el-button type="danger" 
                    @click="handleDelete(scope.row)">
                    删除
                    </el-button>
                    <el-button type="primary" 
                    @click="handleEdit(scope.row)">
                    修改
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog :title="dialogTitle" :visible.sync="dialogFormVisible"  width="500px">
            <el-form :model="addForm"  :rules="rules" ref="form">
                <el-form-item label="姓名" :label-width="formLabelWidth" prop="name">
                    <el-input v-model="addForm.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="性别" :label-width="formLabelWidth" prop="sex">
                    <el-radio v-model="addForm.sex" label="1">
                        男
                    </el-radio>
                    <el-radio v-model="addForm.sex" label="2">
                        女
                    </el-radio>
                </el-form-item>
                <el-form-item label="年龄" :label-width="formLabelWidth" prop="age">
                    <el-input v-model="addForm.age" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="父亲" :label-width="formLabelWidth" prop="father">
                    <el-input v-model="addForm.father" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="母亲" :label-width="formLabelWidth" prop="mother">
                    <el-input v-model="addForm.mother" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="家庭住址" :label-width="formLabelWidth" prop="address">
                    <el-input v-model="addForm.address" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="入校时间" :label-width="formLabelWidth" prop="time">
                    <el-date-picker 
                    v-model="addForm.time" 
                    format="yyyy 年 MM月 dd 日"
                    value-format="yyyy-MM-dd"
                    type="date" 
                    placeholder="选择日期" 
                    >
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="联系方式" :label-width="formLabelWidth" prop="phone">
                    <el-input v-model="addForm.phone" autocomplete="off"></el-input>
                </el-form-item>
                
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="closeForm()">取 消</el-button>
                <el-button type="primary" @click="sure()">确 定</el-button>
            </div>
        </el-dialog>

    </div>
</template>
<script>
import{addInfo,getInfo,editInfo,deleteInfo} from '@/api/api.js'
    export default{
    data(){
        return {
            TableData:[],
            dialogFormVisible:false,
            addForm:{
                name:'',
                sex:"1",
                age:'',
                father:'',
                mother:'',
                address:'',
                time:'',
                phone:''
            },
            formLabelWidth:"80px",
            rules:{
                name:[{required:true,message:"请输入姓名"}],
                sex:[{required:true}],
                age:[{required:true,message:"请输入年龄"}],
                address:[{required:true,message:"请输入地址"}],
                time:[{required:true,message:"请输入入学时间"}],
                phone:[{required:true,message:"请输入手机号"}]
            },
            total:0,
            state:0,
            dialogTitle:''
        }
    },
    created(){
        this.getData()
    },
    methods:{
        closeForm(){
            this.$refs.form.resetFields()
            this.dialogFormVisible=false
        },
        sure(){
            this.$refs.form.validate(valid=>{
                if(valid){
                    if(this.state===0){
                    console.log(this.addForm)
                    addInfo(this.addForm).then(res=>{
                        if(res.data.status===200){
                            this.getData()
                            this.dialogFormVisible=false
                            this.$message({type:'success',message:res.data.message})
                        }
                    })
                }
                else{
                    editInfo(this.addForm).then(res=>{
                        if(res.data.status===200){
                            this.getData()
                            this.dialogFormVisible=false
                            this.$message({type:'success',message:res.data.message})
                        }
                    })
                }
                }
            })
            this.$refs.form.resetFields()
        },
        getData(){
            getInfo().then(res=>{
                if(res.data.status===200){
                    this.TableData=res.data.data
                    this.total=res.data.total
                    this.TableData.forEach(item=>{
                    item.sex==='1' ? item.sex_text='男' : item.sex_text='女'
                    })
                    console.log("tabledata是",this.TableData)
                }
            })
        },
        handleDelete(row){
            this.$alert('你确定要删除吗','提示',{
                confirmButtonText:'确认',
                callback:()=>{
                    deleteInfo(row.id).then(res=>{
                        if(res.data.status===200){
                            this.getData()
                            this.$message({message:res.data.message,type:'success'})
                        }
                    })
                }
            })
            deleteInfo(row.id)
        },
        handleEdit(row){
            this.dialogFormVisible=true
            console.log(row)
            this.addForm={...row}
            this.state=1
            this.dialogTitle='修改信息'
            
        },
        addStudent(){
            this.dialogFormVisible=true 
            this.state=0
            this.dialogTitle='添加信息'
        }
    }
}

</script>
<style scoped lang="scss">
.infoList{
    .demo-form-inline,.el-form-item{
        text-align: left;
    }
}

</style>