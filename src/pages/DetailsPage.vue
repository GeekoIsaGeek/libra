<script setup>
import { useRoute, useRouter } from 'vue-router';
import useLocale from '@/composables/useLocale';
import GenreTag from '@/components/common/GenreTag.vue';
import { capitalize, onMounted, ref, computed } from 'vue';
import { addToRecentlyViewed } from '@/helpers.js';
import BookIcon from '@/components/icons/BookIcon.vue';
import axios from 'axios';
import EditIcon from '@/components/icons/EditIcon.vue';
import useBookStore from '@/stores/BookStore';
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/UserStore';
import { UPLOADS_DIR } from '@/config/constants';

const { params } = useRoute();
const { locale } = useLocale();
const { push: navigate } = useRouter();
const { books } = storeToRefs(useBookStore());
const { user } = useUserStore();

const book = ref(null);

const bookUrl = computed(() => `${UPLOADS_DIR}${book?.value?.file}`);
const imageUrl = computed(() => `${UPLOADS_DIR}${book?.value?.image}`);

onMounted(() => {
	const bookDetails = books.value.find((book) => book?.slug === params?.slug);
	if (bookDetails?.id) {
		book.value = bookDetails;

		addToRecentlyViewed({
			id: bookDetails.id,
			title: bookDetails?.title,
			image: bookDetails?.image,
			slug: bookDetails?.slug,
		});
	} else {
		navigate({ name: 'not-found' });
	}
});

const handleDownload = async () => {
	if (`${book.value?.file}`) {
		const response = await axios.get(bookUrl.value);
		const blob = new Blob([response.data]);
		const url = window.URL.createObjectURL(new Blob([blob]));

		const link = document.createElement('a');
		link.href = url;
		link.download = book.value.file.split('/').pop();
		link.click();
		window.URL.revokeObjectURL(url);
		link.remove();
	}
};

const redirectToEditPage = () => {
	navigate({ name: 'edit-book', params: { slug: book.value.slug } });
};
</script>

<template>
	<div class="flex flex-col items-center mt-16 w-full h-full justify-start">
		<div class="flex items-center justify-center gap-5">
			<h1 class="text-center text-3xl lg:text-4xl">{{ book?.title?.[locale] }}</h1>
			<EditIcon
				v-if="user?.id && book?.created_by === user?.id"
				class="w-8 h-8 cursor-pointer hover:fill-lightBrown transition-colors"
				@click="redirectToEditPage"
			/>
		</div>

		<div class="mt-10 xl:mt-24 flex flex-col xl:flex-row justify-center items-center gap-5">
			<a :href="bookUrl" target="_blank" class="cursor-pointer">
				<img
					class="rounded-sm w-[160px] h-[240px] lg:w-[220px] lg:h-[300px] xl:w-[400px] xl:h-[620px]"
					:src="imageUrl"
					:alt="book?.title?.[locale]"
				/>
			</a>

			<div
				class="xl:mt-0 sm:w-[80%] xl:w-[40%] py-5 px-0 md:px-10 lg:pr-0 flex items-start justify-center flex-col gap-5"
			>
				<p class="lg:text-lg px-10 md:px-0">{{ book?.description?.[locale] }}</p>

				<ul class="lg:text-lg list-disc list-inside pl-10 md:pl-0">
					<li>
						<span class="font-bold mr-1">{{ $t('bookForm.fields.author.label') }}:</span>
						{{ book?.author?.[locale] }}
					</li>
					<li>
						<span class="font-bold mr-1">{{ $t('filters.language') }}:</span>
						{{ locale === 'ka' ? book?.language?.[locale] : capitalize(book?.language?.[locale] || '') }}
					</li>
					<li>
						<span class="font-bold mr-1">{{ $t('bookForm.fields.year.label') }}:</span> {{ book?.year }}
					</li>
					<li>
						<span class="font-bold mr-1">{{ $t('bookForm.fields.pages.label') }}:</span>
						{{ book?.pages }}
					</li>
				</ul>

				<ul
					class="lg:mt-5 px-10 md:px-0 flex flex-wrap justify-center md:gap-2 items-center sm:justify-start shadow"
				>
					<GenreTag
						v-for="tag in book?.tags ? book?.tags?.split(',') : []"
						:key="tag"
						class="bg-gold text-black px-2 py-1 rounded-md"
						:tag="capitalize(tag)"
					/>
				</ul>

				<button
					@click="handleDownload"
					class="flex self-center lg:mr-10 xl:self-start gap-2 w-max justify-center py-2 text-black font-bold px-5 bg-lightBrown hover:bg-mediumBrown transition-colors rounded-lg mt-8"
				>
					<BookIcon class="icon fill-black" />
					{{ $t('download') }}
				</button>
			</div>
		</div>
	</div>
</template>
