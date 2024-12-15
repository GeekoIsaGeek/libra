<script setup>
import { reactive, ref, watchEffect } from 'vue';
import LanguageSwitcher from '@/components/common/LanguageSwitcher.vue';
import FormInput from '@/components/UI/FormInput.vue';
import TagsInput from '@/components/manage-books/TagsInput.vue';
import ImageInput from '@/components/UI/ImageInput.vue';
import CustomInputWrapper from '@/components/common/CustomInputWrapper.vue';

const props = defineProps({
	bookData: Object,
	mode: 'add' | 'edit',
});

const bookDetails = reactive(props.bookData);

const inputLocale = ref('ka');

const handleTagAdd = (tag) => {
	if (tag === '' || bookDetails.tags.includes(tag.toLowerCase())) return;
	bookDetails.tags.push(tag.toLowerCase());
};

const handleTagRemove = (tag) => {
	if (tag === '') return;
	bookDetails.tags = bookDetails.tags.filter((t) => t.toLowerCase() !== tag.toLowerCase());
};
</script>

<template>
	<div class="my-14 rounded-sm self-center flex flex-col items-center w-full">
		<h1 class="text-3xl font-medium">{{ $t(`bookForm.${mode}.title`) }}</h1>

		<div
			class="w-3/5 flex flex-col pt-5 pb-10 items-center bg-darkestBrown/50 rounded-md shadow-md min-h-[500px] border border-gold/70 mt-10"
		>
			<div class="flex items-center gap-4 mt-5 mb-10">
				Input language:
				<LanguageSwitcher :customHandler="(loc) => (inputLocale = loc)" :inputLocale="inputLocale" />
			</div>

			<form class="w-1/2 flex flex-col gap-6">
				<FormInput
					name="title"
					placeholder="Enter book title"
					label="Title"
					:value="bookDetails.title[inputLocale]"
					:inputHandler="(val) => (bookDetails.title[inputLocale] = val)"
				/>
				<FormInput
					name="author"
					placeholder="Enter a name of the author"
					label="Author"
					:value="bookDetails.author[inputLocale]"
					:inputHandler="(val) => (bookDetails.author[inputLocale] = val)"
				/>
				<FormInput
					name="year"
					placeholder="Enter the year published"
					label="Year"
					:value="bookDetails.year"
					:inputHandler="(val) => (bookDetails.year = val)"
				/>
				<FormInput
					name="pages"
					placeholder="Enter count of pages"
					label="Pages"
					:value="bookDetails.pages"
					:inputHandler="(val) => (bookDetails.pages = val)"
				/>
				<FormInput
					name="description"
					placeholder="Enter book description"
					label="Description"
					type="textarea"
					:value="bookDetails.description[inputLocale]"
					:inputHandler="(val) => (bookDetails.description[inputLocale] = val)"
				/>

				<TagsInput :tags="bookDetails.tags" :addHandler="handleTagAdd" :removeHandler="handleTagRemove" />

				<CustomInputWrapper label="Cover">
					<ImageInput @setPhoto="(image) => (bookDetails.image = image)" :initialPhoto="bookDetails.image" />
				</CustomInputWrapper>

				<button
					type="submit"
					@click.prevent
					class="mt-5 py-2 px-20 bg-wheat rounded-full self-center text-darkestBrown font-semibold hover:saturate-200 transition-all duration-200 ease-out"
				>
					{{ $t(`bookForm.${mode}.submit`) }}
				</button>
			</form>
		</div>
	</div>
</template>
