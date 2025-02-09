import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { getJwtToken } from '@/helpers';
import { objectToFormData } from '@/helpers';
import { slugify } from '@/helpers';
import { useRouter } from 'vue-router';

const useBookStore = defineStore('books', () => {
	const books = ref([]);
	const selectedBook = ref(null);

	const { push: navigate } = useRouter();

	const fetchBooks = async () => {
		const response = await axios.get(`${import.meta.env.VITE_API_URL}/books`);
		books.value = response.data;
	};

	const addBook = async (book, isFormTouched) => {
		if (!isFormTouched) {
			return;
		}
		const formData = objectToFormData({ ...book, slug: slugify(book?.title['en'], book?.author['en']) });

		const response = await axios.post(`${import.meta.env.VITE_API_URL}/books`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
				Authorization: `Bearer ${getJwtToken()}`,
			},
		});
		if (response.status === 201) {
			books.value.push(response.data);
			navigate({ name: 'details', params: { slug: response.data.slug } });
		}
		console.log(response);
	};

	const updateBook = async (book, isFormTouched) => {
		if (!isFormTouched) return;

		const response = await axios.put(`${import.meta.env.VITE_API_URL}/books/${book?.id}`, book, {
			headers: {
				Authorization: `Bearer ${getJwtToken()}`,
			},
		});
		console.log(response);
	};

	const deleteBook = async (bookId) => {
		const response = await axios.delete(`${import.meta.env.VITE_API_URL}/books/${bookId}`, {
			headers: {
				Authorization: `Bearer ${getJwtToken()}`,
			},
		});
		console.log(response);
	};

	return { books, selectedBook, fetchBooks, addBook, updateBook, deleteBook };
});

export default useBookStore;
