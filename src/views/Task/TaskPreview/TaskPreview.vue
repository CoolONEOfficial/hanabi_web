<template>
    <div class="task">
        <div class="task__body">
            <router-link :to="`/tasks/${task.id}`">
                <v-card>
                    <v-card-title primary-title>
                        <div class="body-2 font-weight-bold mb-1">{{ task.name }}</div>
                        <div class="body-1 mb-3">{{ task.description }}</div>
                        <v-item-group multiple>
                            <v-item>
                                <v-chip label>
                                    <span class="lang">{{ task.lang.toLowerCase() }}</span>
                                </v-chip>
                            </v-item>
                            <v-item>
                                <v-chip label>
                                    <span class="lang">{{ task.type.toLowerCase() }}</span>
                                </v-chip>
                            </v-item>
                            <v-item>
                                <v-chip label>
                                    <span class="lang">{{ task.difficulty.toLowerCase() }}</span>
                                </v-chip>
                            </v-item>
                        </v-item-group>
                    </v-card-title>
                </v-card>
            </router-link>
        </div>
    </div>
</template>

<script>
  export default {
    name: "TaskPreview",
    props: {
      task: {
        type: Object,
        required: true
      }
    },
    data: () => ({
      isLoading: true,
    })
  }
</script>

<style>
    .lang {
        text-transform: capitalize;
    }
</style>
