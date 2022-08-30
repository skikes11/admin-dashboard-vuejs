<template>
  <div class="w-full block mx-auto h-auto py-2">
    <div class="flex flex-wrap flex-col bg-white shadow mb-7 mx-auto rounded-md">

      <div class="py-5 px-6 border-b border-primary-white">
        <h3 class="cursor-auto" style="text-align: center; font-size: 19px;">Users</h3>
      </div>


      <div class="block overflow-x-auto w-full">
        <UsersTable :tableData="users" />
      </div>
      <div class="p-4">
        <div class="w-full">
          <div class="flex justify-end mb-0">
            <el-pagination background layout="prev, pager, next" @current-change="clickPageCallback"
              :total="userTotal" />
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

interface User {
  avatarPath: string
  name: string
}
interface Project {
  projectLogoPath: string
  project: string
  budget: string
  status: string
  users: User[]
  completion: number
}
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
      limit: 7,
      sortSelected: 1
    }
  },
  async created() {
    await this.getAllUser();

  },
  methods: {
    getAllUser() {
      try {
        return api.get(`/api/admin/users/1/${this.limit}/1`).then(async (res) => {
          console.log(res.data);
          this.users = res.data.data;
          this.userTotal = parseInt(res.data.userCount) + 7
        })

      } catch (error) {
        console.log(error);
      }
    },
    clickPageCallback(val) {
      api.get(`/api/admin/users/${val}/${this.limit}/${this.sortSelected}`).then(res => {
        console.log(res.data)
        if (res.data.success) {
          this.users = res.data.data
          this.userTotal = parseInt(res.data.userCount) + 7
        }
      })
    }
  },
})
</script>
