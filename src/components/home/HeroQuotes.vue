<script setup>
import { ref, onMounted } from 'vue';
import bilingualQuotes from '@/assets/quotes.json';
import useLocale from '@/composables/useLocale.js';

const quotes = ref(bilingualQuotes);
const { locale } = useLocale();

const currentQuote = ref(quotes.value[0]);

const changeQuote = () => {
	const randomIndex = Math.floor(Math.random() * quotes.value.length);
	currentQuote.value = quotes.value[randomIndex];
};

onMounted(() => {
	setInterval(changeQuote, 3000);
});
</script>

<template>
	<div class="hero-container">
		<transition name="fade" mode="out-in">
			<div :key="currentQuote.text" class="quote-box">
				<p class="quote">"{{ currentQuote.text[locale] }}"</p>
				<p class="author">- {{ currentQuote.author[locale] }}</p>
			</div>
		</transition>
	</div>
</template>

<style scoped>
.hero-container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100%;
	color: white;
	text-align: center;
	padding: 20px;
}

.quote-box {
	max-width: 600px;
}

.quote {
	font-size: 2rem;
	font-weight: bold;
	margin-bottom: 10px;
}

.author {
	font-size: 1.5rem;
	font-style: italic;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 1s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
