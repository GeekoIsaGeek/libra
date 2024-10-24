import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAppStore = defineStore('app', () => {
	const projectName = ref('Bookly');

	return { projectName };
});
