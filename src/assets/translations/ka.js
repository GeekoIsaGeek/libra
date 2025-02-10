export default {
	general: {
		nothingFound: 'ვერაფერი მოიძებნა',
	},
	search: {
		inputPlaceholder: 'Tag-ებით ძებნისთვის წერა დაიწყეთ #-ით (მაგ. # novel Sci-Fi)',
	},
	filters: {
		title: 'ფილტრები',
		genre: 'ჟანრი',
		pages: 'გვერდი',
		language: 'ენა',
		recentlyViewed: 'ბოლოს ნანახი წიგნები',
	},
	bookForm: {
		add: {
			title: 'ელ-წიგნის დამატება',
			submit: 'დამატება',
		},
		edit: {
			title: 'ელ-წიგნის რედაქტირება',
			submit: 'შენახვა',
		},
		inputLang: 'შეყვანის ენა',
		fields: {
			title: {
				label: 'სათაური',
				placeholder: 'წიგნის სათაური',
			},
			author: {
				label: 'ავტორი',
				placeholder: 'შეიყვანეთ ავტორის სახელი',
			},
			year: {
				label: 'წელი',
				placeholder: 'გამოქვეყნების წელი',
			},
			pages: {
				label: 'გვერდი',
				placeholder: 'გვერდების რაოდენობა',
			},
			description: {
				label: 'აღწერა',
				placeholder: 'წიგნის აღწერილობა',
			},
			tags: {
				label: 'თეგები',
				customTag: 'დამატებითი თეგი',
			},
			cover: {
				label: 'წიგნის სურათი',
			},
			language: {
				label: 'ენა',
				placeholder: 'წიგნის ენა',
			},
			file: {
				label: ' წიგნის ფაილი',
			},
		},
		delete: 'წაშლა',
	},
	auth: {
		login: 'შესვლა',
		email: 'ელფოსტა',
		password: 'პაროლი',
		register: 'რეგისტრაცია',
		username: 'სახელი',
		passwordConfirmation: 'დადასტურება',
		passwordConfirmationPlaceholder: 'გაიმეორეთ პაროლი',
		emailPlaceholder: 'შეიყვანეთ ელფოსტა',
		passwordPlaceholder: 'შეიყვანეთ პაროლი',
		usernamePlaceholder: 'შეიყვანეთ მომხმარებლის სახელი',
		logOut: 'გასვლა',
	},
	errors: {
		required: 'ეს ველი აუცილებელია',
		email: 'არასწორი ელ-ფოსტა',
		username: 'მომხმარებლის სახელი უნდა იყოს მინიმუმ 3 სიმბოლო',
		password: 'პაროლი უნდა იყოს მინიმუმ 8 სიმბოლო და შეიცავდეს მინიმუმ ერთ ციფრს',
		passwordConfirmation: 'პაროლები არ ემთხვევა',
	},
	download: 'ჩამოტვირთვა',
	notFound: '404 - ვერ მოიძებნა!',
	pageDoesNotExist: 'ასეთი გვერდი არ არსებობს!',
	fileNotAccessible: 'ამ წიგნის ჩამოტვირთვა ამჟამად შეუძლებელია!',
	routes: {
		home: 'მთავარი',
		add: 'დამატება',
		login: 'შესვლა',
		about: 'ჩვენს შესახებ',
	},

	// Order of languages and genres should be the same as in the constants file
	languages: ['ინგლისური', 'ქართული'],
	genres: [
		'ფანტასტიკა',
		'მისტიკა',
		'თრილერი',
		'რომანი',
		'საშინელება',
		'სამეცნიერო ფანტასტიკა',
		'დისტოპიური',
		'ისტორიული',
		'ბიოგრაფიული',
		'მემუარი',
		'თვითდახმარება',
		'ჯანმრთელობა',
		'კულინარიული',
		'პოეზია',
		'გზამკვლევი',
		'საბავშვო',
		'კომიქსი',
	],
};
