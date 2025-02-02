<script setup>
import { useRoute, useRouter } from 'vue-router';
import useLocale from '@/composables/useLocale';
import Books from '/dummy-books.json';
import GenreTag from '@/components/common/GenreTag.vue';
import { capitalize, onMounted, ref } from 'vue';
import { addToRecentlyViewed } from '@/helpers.js';

const { params } = useRoute();
const { locale } = useLocale();
const { push: navigate } = useRouter();

const book = ref(null);

onMounted(() => {
	const bookDetails = Books.books.find((book) => book?.slug === params?.slug);

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
</script>

<template>
	<div class="flex flex-col items-center mt-16 w-full h-full justify-start">
		<h1 class="text-center text-3xl lg:text-4xl">{{ book?.title?.[locale] }}</h1>

		<div class="mt-10 xl:mt-24 flex flex-col xl:flex-row justify-center items-center gap-5">
			<img
				class="rounded-sm w-[160px] h-[240px] lg:w-[220px] lg:h-[300px] xl:w-[400px] xl:h-[620px]"
				:src="book?.image"
				:alt="book?.title?.[locale]"
			/>

			<div class="xl:mt-0 sm:w-[80%] xl:w-[40%] p-10 lg:pr-0 flex items-start justify-center flex-col gap-5">
				<p class="lg:text-lg">{{ book?.description?.[locale] }}</p>

				<ul class="lg:text-lg list-disc list-inside">
					<li>
						<span class="font-bold mr-1">{{ $t('bookForm.fields.author.label') }}:</span>
						{{ book?.author?.[locale] }}
					</li>
					<li>
						<span class="font-bold mr-1">{{ $t('filters.language') }}:</span>
						{{ capitalize(book?.language || '') }}
					</li>
					<li>
						<span class="font-bold mr-1">{{ $t('bookForm.fields.year.label') }}:</span> {{ book?.year }}
					</li>
					<li>
						<span class="font-bold mr-1">{{ $t('bookForm.fields.pages.label') }}:</span>
						{{ book?.pages }}
					</li>
				</ul>

				<ul class="lg:mt-10 flex md:gap-2 items-center justify-start shadow">
					<GenreTag
						v-for="tag in book?.tags"
						:key="tag"
						class="bg-gold text-black px-2 py-1 rounded-md"
						:tag="capitalize(tag)"
					/>
				</ul>
			</div>
		</div>
	</div>
</template>
