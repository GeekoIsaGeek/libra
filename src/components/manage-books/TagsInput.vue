<script setup>
import SelectGenre from '@/components/common/SelectGenre.vue';
import RemovableTag from '@/components/common/RemovableTag.vue';
import { ref } from 'vue';
import CustomInputWrapper from '@/components/common/CustomInputWrapper.vue';

const props = defineProps({
	tags: Array,
	addHandler: Function,
	removeHandler: Function,
});

const input = ref('');

const handleTagAdd = () => {
	props.addHandler(input.value);
	input.value = '';
};
</script>

<template>
	<CustomInputWrapper label="Tags">
		<div class="flex justify-between flex-wrap gap-1">
			<SelectGenre class="w-max mt-1" :selectHandler="addHandler" />
			<input
				type="text"
				class="rounded-xl outline-none text-black px-2 py-1 max-w-full"
				placeholder="Custom tag..."
				@keyup.enter="handleTagAdd"
				v-model="input"
			/>
		</div>
		<ul class="flex flex-wrap gap-1.5 mt-2 pt-2 border-t-2 border-wheat" v-if="tags.length > 0">
			<RemovableTag v-for="tag in tags" :key="tag" :text="tag" :closeHandler="removeHandler" />
		</ul>
	</CustomInputWrapper>
</template>
