<template>
  <div class="w-full block mx-auto h-auto py-2">
    <div class="flex flex-wrap flex-col bg-white shadow mb-7 mx-auto rounded-md">

      <div class="py-5 px-6 border-b border-primary-white">
        <h3 class="cursor-auto" style="text-align: center; font-size: 19px;">Users</h3>
      </div>

      <div class="flex-box">
        <el-button type="primary" @click="addUser()">ADD NEW USER</el-button>

        <p class="text-justify title-sort font-semibold">
          Sort By
        </p>
        <el-select v-model="sortSelected" placeholder="Select" @change="onChangeSelect" class="select-box">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>

      </div>
      <div class="block overflow-x-auto w-full p-50">
        <UsersTable :tableData="users" @userId="getUserIdAndDelete" />
      </div>
      <div class="p-4">
        <div class="w-full">
          <div class="flex justify-end mb-0">
            <el-pagination background layout="prev, pager, next" @current-change="clickPageCallback"
              :current-page="currentPage" :total="userTotal" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import env from 'core/env'
import UsersTable from './components/UsersTable.vue'
import api from "../../api/apiServices"

export default defineComponent({
  name: 'Tables',
  components: {
    UsersTable,

  },
  data() {
    return {
      users: [],
      url: ref(env('VITE_DOCUMENT_ENDPOINT')),
      userTotal: 0,
      limit: 100,
      perPage: 5,
      currentPage: 1,
      sortSelected: 1,
      options: [{
        value: 1,
        label: 'Newest',
      },
      {
        value: 2,
        label: 'Oldest',
      }],

    }
  },
  async created() {
    await this.getAllUser();
    console.log(this.users);

  },
  methods: {
    getUserIdAndDelete(id) {
      api.delete(`/api/admin/users/${id}`).then((res) => {
        console.log(res.data);
        if (res.data.success) {
          this.users = this.users.filter(item => item._id !== id);
        }
      })
    },
    getAllUser() {
      try {
        return api.get(`/api/admin/users/1/${this.limit}/1`).then(async (res) => {
          console.log(res.data);
          this.users = res.data.data;
          this.userTotal = parseInt(res.data.userCount)
        })

      } catch (error) {
        console.log(error);
      }
    },
    clickPageCallback(val) {
      this.currentPage = val
      api.get(`/api/admin/users/${val}/${this.limit}/${this.sortSelected}`).then(res => {
        console.log(res.data)
        if (res.data.success) {
          this.users = res.data.data
          this.userTotal = parseInt(res.data.userCount) + 7
        }
      })
    },
    onChangeSelect() {

      api.get(`/api/admin/users/1/${this.limit}/${this.sortSelected}`).then(res => {
        console.log(res.data)
        if (res.data.success) {
          this.currentPage = 1
          this.users = res.data.data
        }
      })
    },
    addUser() {
      this.$router.push("/users/add");
    }
  },
  setup() {

  }
})
</script>

<style scoped>
.flex-box {

  margin-left: 20px;
  display: flex;
}

.select-box {
  margin-left: 5px;
}

.title-sort {
  margin-bottom: 0px;
  margin-left: 30px;
  margin-top: 10px;
}
</style>
