<script setup>
import SelectGenre from '@/components/common/SelectGenre.vue';
import RemovableTag from '@/components/common/RemovableTag.vue';
import { ref } from 'vue';

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
	<div class="flex">
		<div
			class="bg-almostBlack/20 w-[10rem] flex items-center justify-center px-3 text-normal text-center py-1.5 border border-gold rounded-l-md"
		>
			Tags
		</div>
		<div
			class="border border-gold resize-none text-wheat outline-none border-l-0 py-2 px-3 rounded-r-md w-full bg-lightBrown/10 placeholder:text-wheat/80"
		>
			<input
				type="text"
				class="rounded-xl outline-none text-black px-2 py-1"
				placeholder="Custom tag..."
				@keyup.enter="handleTagAdd"
				v-model="input"
			/>
			<SelectGenre class="w-max mt-1" :selectHandler="addHandler" />
			<ul class="flex flex-wrap gap-1.5 mt-2 pt-2 border-t-2 border-wheat" v-if="tags.length > 0">
				<RemovableTag v-for="tag in tags" :key="tag" :text="tag" :closeHandler="removeHandler" />
			</ul>
		</div>
	</div>
</template>
