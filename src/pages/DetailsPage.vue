<script setup>
import { useRoute, useRouter } from 'vue-router';
import useLocale from '@/composables/useLocale';
import GenreTag from '@/components/common/GenreTag.vue';
import { capitalize, ref, computed, watchEffect } from 'vue';
import { addToRecentlyViewed } from '@/helpers.js';
import BookIcon from '@/components/icons/BookIcon.vue';
import axios from 'axios';
import EditIcon from '@/components/icons/EditIcon.vue';
import useBookStore from '@/stores/BookStore';
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/UserStore';
import { getTags } from '@/helpers';
import { getFileUrl } from '@/helpers';
import InfoIcon from '@/components/icons/InfoIcon.vue';

const { params } = useRoute();
const { locale } = useLocale();
const { push: navigate } = useRouter();
const { books } = storeToRefs(useBookStore());
const { user } = storeToRefs(useUserStore());

const book = ref(null);

const bookUrl = computed(() => getFileUrl(book?.value?.file || ''));
const imageUrl = computed(() => getFileUrl(book?.value?.image || ''));

watchEffect(() => {
	const bookDetails = books.value.find((book) => book?.slug === params?.slug);
	if (bookDetails?.id) {
		book.value = bookDetails;

		addToRecentlyViewed({
			id: bookDetails.id,
			title: bookDetails?.title,
			image: bookDetails?.image,
			slug: bookDetails?.slug,
		});
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
	<div v-if="!book" class="w-full h-full flex items-center justify-center">Loading...</div>
	<div v-else class="flex flex-col items-center pt-16 w-full h-full justify-start bg-[#0f0f0f98]">
		<div class="flex items-center justify-center gap-5">
			<h1 class="text-center text-3xl lg:text-4xl">{{ book?.title?.[locale] }}</h1>
			<EditIcon
				v-if="user?.id && book?.created_by === user?.id"
				class="w-8 h-8 cursor-pointer hover:fill-lightBrown transition-colors"
				@click="redirectToEditPage"
			/>
		</div>

		<div class="mt-10 xl:mt-24 flex flex-col xl:flex-row justify-center items-center gap-5">
			<img
				class="rounded-sm w-[160px] h-[240px] lg:w-[220px] lg:h-[300px] xl:w-[400px] xl:h-[620px]"
				:src="imageUrl"
				:alt="book?.title?.[locale]"
			/>

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
						v-for="tag in getTags(book?.tags)"
						:key="tag"
						class="bg-gold text-black px-2 py-1 rounded-md"
						:tag="capitalize(tag)"
					/>
				</ul>

				<button
					@click="handleDownload"
					class="flex self-center lg:mr-10 xl:self-start gap-2 w-max justify-center py-2 text-black font-bold px-5 bg-lightBrown hover:bg-mediumBrown transition-colors rounded-lg mt-8"
					v-if="book?.file"
				>
					<BookIcon class="icon fill-black" />
					{{ $t('download') }}
				</button>

				<div class="text-center flex items-center justify-center gap-2 mt-8" v-else>
					<InfoIcon class="icon fill-white" />
					{{ $t('fileNotAccessible') }}
				</div>
			</div>
		</div>
	</div>
</template>
