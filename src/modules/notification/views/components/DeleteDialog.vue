<template>
    <div class="w-full">
        <el-dialog v-model="triggerModal" title="Confirm to delete user" @close="$emit('closeModal')">
            <template #footer>
                <p> {{ userName }} </p>
                <span class="dialog-footer">
                    <el-button class="btn-open" type="danger" @click="$emit('deleteUser')">Delete</el-button>
                    <el-button class="el-button--secondary" plain @click="$emit('closeModal')">Close</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

  <script lang="ts">
  import { defineComponent } from 'vue'
  
  export default defineComponent({
      name: 'DeleteDialog',
      props: {
          userName: String,
          userID: String,
          triggerModal: {
              type: Boolean,
              default: false,
          },
      },
  })
  </script>
  