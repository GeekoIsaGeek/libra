<script setup>
import TheAddImageIcon from '@/components/icons/AddImageIcon.vue';
import { ref } from 'vue';

const emit = defineEmits(['setFile']);

const props = defineProps({
	initialFile: Object | null,
});

const selectedFile = ref(props.initialFile);

const handleChange = (e) => {
	const target = e.currentTarget;
	const selected = target.files[0];

	if (!selected || !['application/pdf', 'application/mobi', 'application/epub'].includes(selected.type)) {
		selectedFile.value = null;
	} else {
		selectedFile.value = selected;
		emit('setFile', selected);
	}
	target.value = '';
};
</script>

<template>
	<div class="w-full h-[120px] overflow-hidden relative flex items-center justify-center flex-col gap-4">
		<TheAddImageIcon class="fill-wheat w-7 h-7" />
		<p v-if="selectedFile" class="text-center">{{ selectedFile?.name }}</p>

		<input
			type="file"
			accept=".epub, .mobi, .pdf"
			class="scale-[600%] cursor-pointer opacity-0 absolute top-half left-0"
			@change="handleChange"
		/>
	</div>
</template>
