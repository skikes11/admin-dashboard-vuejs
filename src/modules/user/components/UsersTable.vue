<template>
  <div class="w-full">
    <el-table :data="tableData" style="width: 100%" :class="`is-${theme}`">
      <el-table-column label="AVATAR" min-width="80">
        <template #default="scope">
          <div class="flex items-center">
            <a href="#"
              class="inline-flex border border-slate-50 w-12 h-12 rounded-full bg-[#adb5bd] items-center justify-center">
              <el-avatar :size="46" :src="'http://localhost:8000' + scope.row.avatar" />
            </a>

          </div>
        </template>
      </el-table-column>


      <el-table-column label="USERNAME" min-width="80">
        <template #default="scope">
          <div class="px-4 cursor-auto">
            <span class="text-0.8125 font-semibold">{{  scope.row.name  }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="ACTIVE" min-width="80">
        <template #default="scope">
          <div class="px-4 flex items-center">
            <i class="w-1.5 h-1.5 rounded-full" aria-hidden="true" :class="[
              scope.row.active == 'on schedule'
                ? 'bg-info'
                : scope.row.active == 'delayed'
                  ? 'bg-danger'
                  : scope.row.active == 'pending'
                    ? 'bg-warning'
                    : 'bg-success',
            ]"></i>
            <span class="ml-2 pb-0.5 text-0.875 font-semibold">{{  scope.row.active  }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="EMAIL" min-width="150">
        <template #default="scope">
          <div class="px-4 cursor-auto">
            <span class="text-0.8125 font-semibold">{{  scope.row.email  }}</span>
          </div>
        </template>
      </el-table-column>

      <el-table-column label="ROLE" min-width="100">
        <template #default="scope">
          <div class="px-4 flex flex-row items-center">
            <div>
              <span class="text-0.8125 font-semibold">{{  scope.row.role.name  }}</span>
            </div>

          </div>
        </template>
      </el-table-column>

      <el-table-column label="PHONE" min-width="100">
        <template #default="scope">
          <div class="px-4 flex flex-row items-center">
            <div>
              <span class="text-0.8125 font-semibold">{{  scope.row.phone  }}</span>
            </div>
          </div>
        </template>
      </el-table-column>


      <el-table-column width="60" fixed="right">
        <div class="text-center h-12 pt-2.5">
          <el-dropdown placement="bottom-end" trigger="click" popper-class="action-column-popper">
            <el-button class="w-5 h-7 border-none bg-transparent hover:shadow-md" plain>
              <div class="flex items-center space-x-2 2xl:space-x-4 text-black px-5">
                <DotsVerticalIcon class="cursor-pointer h-5 w-5 text-[#ced4da] font-extrabold" />
              </div>
            </el-button>
            <template #dropdown>
              <el-dropdown-menu class="my-0.5">


                <el-dropdown-item class="mx-0 hover:bg-secondary text-zinc-800">
                  <div class="flex items-center w-40 h-6">
                    <span class="mb-0 text-sm font-normal">EDIT</span>
                  </div>
                </el-dropdown-item>

                <el-dropdown-item class="mx-0 hover:bg-secondary text-zinc-800">
                  <div class="flex items-center w-40 h-6">
                    <span class="mb-0 text-sm font-normal">DELETE</span>
                  </div>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { DotsVerticalIcon } from '@heroicons/vue/outline'

export default defineComponent({
  name: 'ProjectTable',
  components: {
    DotsVerticalIcon,
  },
  props: {
    tableData: {
      type: Array,
      required: true,
    },
    theme: {
      type: String,
      required: false,
      default: 'light',
    },
  },
  setup() {
    const theme = ref([
      { status: 'on schedule', color: '#11CDEF' },
      { status: 'delayed', color: '#F5365C' },
      { status: 'pending', color: '#FB6340' },
    ])
    const customColorMethod = (status: string) => {
      return theme.value.find((el: any) => el.status == status)?.color ?? '#2DCE89'
    }
    return {
      customColorMethod,
    }
  },
})
</script>
