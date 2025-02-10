<script setup>
import { reactive, ref, watch, watchEffect } from 'vue';
import LanguageSwitcher from '@/components/common/LanguageSwitcher.vue';
import FormInput from '@/components/UI/FormInput.vue';
import TagsInput from '@/components/manage-books/TagsInput.vue';
import ImageInput from '@/components/UI/ImageInput.vue';
import CustomInputWrapper from '@/components/common/CustomInputWrapper.vue';
import FileInput from '@/components/UI/FileInput.vue';
import useValidator from '@/composables/useValidator';
import DeleteIcon from '@/components/icons/DeleteIcon.vue';
import { useUserStore } from '@/stores/UserStore';
import { storeToRefs } from 'pinia';
import useBookStore from '@/stores/BookStore';
import useLocale from '@/composables/useLocale.js';
import { getTags } from '@/helpers';
import { getFileUrl } from '@/helpers';

const props = defineProps({
	bookData: Object,
	mode: 'add' | 'edit',
});

const { isFormTouched } = useValidator();
const { setLocale } = useLocale();
const { user } = storeToRefs(useUserStore());
const { addBook, deleteBook, updateBook } = useBookStore();

const bookDetails = reactive({ ...props.bookData, tags: getTags(props?.bookData?.['tags']) });

watch(bookDetails, () => {
	if (!isFormTouched.value) {
		isFormTouched.value = true;
	}
});

const inputLocale = ref('en');

watchEffect(() => {
	setLocale(inputLocale.value);
});

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
		<h1 class="text-3xl font-medium text-center">{{ $t(`bookForm.${mode}.title`) }}</h1>

		<div
			class="w-full xl:w-[75%] flex flex-col px-4 pt-5 pb-10 items-center bg-darkestBrown/50 rounded-md shadow-md min-h-[500px] border border-gold/70 mt-6 sm:mt-12 lg:mt-4"
		>
			<div class="flex flex-wrap justify-center items-center gap-4 mt-5 mb-10">
				{{ $t('bookForm.inputLang') }}:
				<LanguageSwitcher :customHandler="(loc) => (inputLocale = loc)" :inputLocale="inputLocale" />
			</div>

			<form class="md:w-1/2 flex flex-col gap-6">
				<FormInput
					name="title"
					:placeholder="$t('bookForm.fields.title.placeholder')"
					:label="$t('bookForm.fields.title.label')"
					:value="bookDetails?.title?.[inputLocale]"
					:inputHandler="(val) => (bookDetails.title[inputLocale] = val)"
				/>
				<FormInput
					name="author"
					:placeholder="$t('bookForm.fields.author.placeholder')"
					:label="$t('bookForm.fields.author.label')"
					:value="bookDetails?.author?.[inputLocale]"
					:inputHandler="(val) => (bookDetails.author[inputLocale] = val)"
				/>
				<FormInput
					name="year"
					:placeholder="$t('bookForm.fields.year.placeholder')"
					:label="$t('bookForm.fields.year.label')"
					:value="bookDetails?.year?.toString()"
					:inputHandler="(val) => (bookDetails.year = val)"
				/>
				<FormInput
					name="pages"
					:placeholder="$t('bookForm.fields.pages.placeholder')"
					:label="$t('bookForm.fields.pages.label')"
					:value="bookDetails?.pages?.toString()"
					:inputHandler="(val) => (bookDetails.pages = val)"
				/>
				<FormInput
					name="language"
					:placeholder="$t('bookForm.fields.language.placeholder')"
					:label="$t('bookForm.fields.language.label')"
					:value="bookDetails?.language?.[inputLocale]"
					:inputHandler="(val) => (bookDetails.language[inputLocale] = val)"
				/>
				<FormInput
					name="description"
					:placeholder="$t('bookForm.fields.description.placeholder')"
					:label="$t('bookForm.fields.description.label')"
					type="textarea"
					:value="bookDetails?.description?.[inputLocale]"
					:inputHandler="(val) => (bookDetails.description[inputLocale] = val)"
				/>
				<TagsInput :tags="bookDetails.tags" :addHandler="handleTagAdd" :removeHandler="handleTagRemove" />

				<div class="flex justify-betwen w-full gap-6">
					<CustomInputWrapper :label="$t('bookForm.fields.cover.label')" class="w-1/2">
						<ImageInput
							@setPhoto="(image) => (bookDetails.image = image)"
							:initialPhoto="getFileUrl(bookDetails?.image)"
						/>
					</CustomInputWrapper>

					<CustomInputWrapper :label="$t('bookForm.fields.file.label')" class="w-1/2">
						<FileInput @setFile="(file) => (bookDetails.file = file)" :initialFile="bookDetails?.file" />
					</CustomInputWrapper>
				</div>

				<button
					type="submit"
					@click.prevent="
						() => (mode === 'add' ? addBook(bookDetails, isFormTouched) : updateBook(bookDetails, isFormTouched))
					"
					class="mt-5 py-2 px-20 bg-wheat rounded-full self-center text-darkestBrown font-semibold hover:saturate-200 transition-all duration-200 ease-out"
				>
					{{ $t(`bookForm.${mode}.submit`) }}
				</button>

				<button
					@click.prevent="() => deleteBook(bookDetails?.id)"
					class="py-2 px-16 bg-red-500 rounded-full self-center text-darkestBrown font-semibold hover:bg-red-600 transition-all duration-200 ease-out flex items-center justify-between gap-1"
					v-if="mode === 'edit' && user?.id && bookDetails?.created_by === user?.id"
				>
					{{ $t(`bookForm.delete`) }}
					<DeleteIcon class="icon w-4 h-4" />
				</button>
			</form>
		</div>
	</div>
</template>
