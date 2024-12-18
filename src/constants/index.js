import {
	angularjs,
	web,
	javascript,
	typescript,
	reactjs,
	redux,
	tailwind,
	nodejs,
	docker,
	petersfrontendworld,
	countryweatherapp,
	deloitte,
	dengun,
	openpublishing,
	polarising
} from "../assets";

export const navLinks = [
	{
		id: "about",
	},
	{
		id: "work",
	},
	{
		id: "contact",
	},
];

const works = {
	description: "description"
};

const services = [
	{
		title: 'web_developer',
		icon: web,
	},
	{
		title: 'react_developer',
		icon: reactjs,
	},
	{
		title: 'angular_js_developer',
		icon: angularjs,
	},
	{
		title: 'node_js_developer',
		icon: nodejs,
	},
];

const technologies = [
	{
		name: "Javascript",
		icon: javascript,
	},
	{
		name: "Typescript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Angular JS",
		icon: angularjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "docker",
		icon: docker,
	},
];

const experiences = [
	{
		title: "polarising.title",
		location: "polarising.location",
		company_name: "polarising.name",
		icon: polarising,
		iconBg: "#000000",
		date: "polarising.date",
		tasks: "polarising.tasks",
	},
	{
		title: "openpublishing.title",
		location: "openpublishing.location",
		company_name: "openpublishing.name",
		icon: openpublishing,
		iconBg: "#000000",
		date: "openpublishing.date",
		tasks: "openpublishing.tasks",
	},
	{
		title: "dengun.title",
		location: "dengun.location",
		company_name: "dengun.name",
		icon: dengun,
		iconBg: "#000000",
		date: "dengun.date",
		tasks: "dengun.tasks",
	},
	{
		title: "deloitte.title",
		location: "deloitte.location",
		company_name: "deloitte.name",
		icon: deloitte,
		iconBg: "#000000",
		date: "deloitte.date",
		tasks: "deloitte.tasks",
	},
];

const testimonials = [
	{
		testimonial:
			"I thought it was impossible to make a website as beautiful as our product, but Pedro proved me wrong.",
		name: "Sara Lee",
		designation: "CFO",
		company: "Acme Co",
		image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Pedro does.",
		name: "Chris Brown",
		designation: "COO",
		company: "DEF Corp",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial:
			"After Pedro optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: "Lisa Wang",
		designation: "CTO",
		company: "456 Enterprises",
		image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
];

const projects = [
	{
		name: "Peters Frontend World",
		description:
			"project_1_description",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "three",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
		],
		image: petersfrontendworld,
		source_code_link: "https://github.com/PeterPanFE/my-portfolio",
	},
	{
		name: "Country Web App",
		description:
			"project_2_description",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "axios",
				color: "green-text-gradient",
			},
			{
				name: "graphql",
				color: "pink-text-gradient",
			},
			{
				name: "apolloclient",
				color: "orange-text-gradient",
			},
			{
				name: "express",
				color: "cyan-text-gradient",
			},
		],
		image: countryweatherapp,
		source_code_link: "https://github.com/PeterPanFE/country-weather-app",
	},
];

const my_global_info = {
	name: "Pedro",
	job: "Senior Frontend Developer",
	email: "pedro.afonso.p.oliveira@gmail.com",
};

export {
	works,
	services,
	technologies,
	experiences,
	testimonials,
	projects,
	my_global_info,
};
