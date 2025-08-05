<template>
  <DataView
    unstyled
    :pt="theme"
    :ptOptions="{
      mergeProps: ptViewMerge,
    }"
  >
    <template
      #paginatorcontainer="{
        page,
        pageCount,
        pageLinks,
        changePageCallback,
        firstPageCallback,
        lastPageCallback,
        prevPageCallback,
        nextPageCallback,
      }"
    >
      <div class="flex flex-wrap items-center justify-center gap-2">
        <SecondaryButton
          text
          rounded
          @click="firstPageCallback"
          :disabled="page === 0"
        >
          <template #icon>
            <AngleDoubleLeftIcon />
          </template>
        </SecondaryButton>
        <SecondaryButton
          text
          rounded
          @click="prevPageCallback"
          :disabled="page === 0"
        >
          <template #icon>
            <AngleLeftIcon />
          </template>
        </SecondaryButton>
        <div class="flex items-center justify-center gap-2">
          <SecondaryButton
            v-for="pageLink of pageLinks"
            :key="pageLink"
            :text="page + 1 !== pageLink"
            rounded
            @click="() => changePageCallback(pageLink - 1)"
            :class="[
              'h-10 min-w-10 shrink-0 sm:flex',
              { 'bg-highlight!': page + 1 === pageLink },
              { 'hidden! sm:flex!': page + 1 !== pageLink },
            ]"
            >{{ pageLink }}
          </SecondaryButton>
        </div>
        <SecondaryButton
          text
          rounded
          @click="nextPageCallback"
          :disabled="page === pageCount! - 1"
        >
          <template #icon>
            <AngleRightIcon />
          </template>
        </SecondaryButton>
        <SecondaryButton
          text
          rounded
          @click="lastPageCallback"
          :disabled="page === pageCount! - 1"
        >
          <template #icon>
            <AngleDoubleRightIcon />
          </template>
        </SecondaryButton>
      </div>
    </template>
    <template v-for="(_, slotName) in $slots" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </DataView>
</template>

<script setup lang="ts">
import AngleDoubleLeftIcon from '@primevue/icons/angledoubleleft';
import AngleDoubleRightIcon from '@primevue/icons/angledoubleright';
import AngleLeftIcon from '@primevue/icons/angleleft';
import AngleRightIcon from '@primevue/icons/angleright';
import DataView, {
  type DataViewPassThroughOptions,
  type DataViewProps,
} from 'primevue/dataview';
import { ref } from 'vue';
import SecondaryButton from './SecondaryButton.vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ DataViewProps {}
defineProps<Props>();

const theme = ref<DataViewPassThroughOptions>({
  root: `border-none`,
  header: `py-3 px-4`,
  content: ``,
  emptyMessage: ``,
  footer: `py-3 px-4`,
  pcPaginator: {
    root: `flex items-center justify-center flex-wrap py-2 px-4 rounded-md gap-1`,
  },
});
</script>
