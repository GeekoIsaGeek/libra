<template>
	<div class="hero-container">
		<transition name="fade" mode="out-in">
			<div :key="currentQuote.text" class="quote-box">
				<p class="quote">"{{ currentQuote.text }}"</p>
				<p class="author">- {{ currentQuote.author }}</p>
			</div>
		</transition>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const quotes = ref([
	{
		text: 'It is our choices, Harry, that show what we truly are, far more than our abilities.',
		author: 'J.K. Rowling',
	},
	{ text: 'The only way out of the labyrinth of suffering is to forgive.', author: 'John Green' },
	{ text: 'It does not do to dwell on dreams and forget to live.', author: 'J.K. Rowling' },
	{ text: 'All we have to decide is what to do with the time that is given us.', author: 'J.R.R. Tolkien' },
	{
		text: 'Happiness can be found even in the darkest of times, if one only remembers to turn on the light.',
		author: 'J.K. Rowling',
	},
]);

const currentQuote = ref(quotes.value[0]);

const changeQuote = () => {
	const randomIndex = Math.floor(Math.random() * quotes.value.length);
	currentQuote.value = quotes.value[randomIndex];
};

onMounted(() => {
	setInterval(changeQuote, 3000);
});
</script>

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
