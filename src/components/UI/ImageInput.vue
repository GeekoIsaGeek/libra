<script setup>
import TheAddImageIcon from '@/components/icons/AddImageIcon.vue';
import { computed, ref } from 'vue';

const emit = defineEmits(['setPhoto']);

const props = defineProps({
	initialPhoto: String,
});

const selectedImage = ref();
const canShowModal = ref(false);

const handleChange = (e) => {
	const target = e.currentTarget;
	const selectedFile = target.files[0];

	if (!selectedFile) {
		selectedImage.value = null;
	}

	if (selectedFile && selectedFile.size < 2 * 1024 * 1024) {
		selectedImage.value = selectedFile;
		canShowModal.value = true;
		emit('setPhoto', selectedFile);
	}
	target.value = '';
};

const imageUrl = computed(() => {
	return selectedImage.value ? URL.createObjectURL(selectedImage.value) : props.initialPhoto;
});
</script>

<template>
	<div
		class="w-[120px] h-[120px] overflow-hidden relative flex items-center rounded-lg justify-center border-[3px] border-dashed border-wheat hover:bg-wheat/10 transition-colors"
		:class="{ 'py-5': !imageUrl }"
	>
		<TheAddImageIcon class="fill-wheat w-7 h-7" v-if="!imageUrl" />

		<img :src="imageUrl" v-else="imageUrl" class="w-full h-full rounded object-cover" />

		<input
			type="file"
			accept="image/jpeg, iamge/png, image/webp"
			class="scale-[600%] cursor-pointer opacity-0 absolute top-half left-0"
			@change="handleChange"
		/>
	</div>
</template>
