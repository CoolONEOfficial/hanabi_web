<template>
    <div class="task">
        <router-link :to="`/tasks/${task.id}`">
            <v-card>
                <UserPreview :user="task.creator"></UserPreview>
                <v-divider></v-divider>
                <v-card-title primary-title>
                    <div class="task__body">
                        <div class="body-2 font-weight-bold mb-1">{{ task.name }}</div>
                        <div class="body-1 mb-3">{{ task.description }}</div>
                        <v-item-group multiple>
                            <v-item>
                                <v-chip label>
                                    <span class="lang">{{ task.src.language != null ? task.src.language.replace('X_',
                                        '').toLowerCase()  : 'Unknown language'
                                        }}</span>
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
                    </div>
                </v-card-title>
            </v-card>
        </router-link>
    </div>
</template>

<script>
  import UserPreview from "../../User/UserPreview/UserPreview";
  export default {
    name: "TaskPreview",
      components: {UserPreview},
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
