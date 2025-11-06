'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
//import { video } from 'framer-motion/client';

const projects = [
		{
		title: 'Food App',
		description: 'A food delivery app ',
		image: '/foodappSS.png',
		tags: ['React.js', 'tailwindCSS', 'Framer motion'],
		video: 'https://drive.google.com/file/d/1eYCccKrlxOWEt_mzgtOxgYY-bb7IpvO9/view?usp=sharing',
		git:'https://github.com/ChiragKuikel/FoodApp'
	},
	{
		title: 'Lawnepal',
		description: 'A lawyer booking platform ',
		image: '/lawyerApp.png',
		tags: ['React.js', 'tailwindCSS'],
		video:'https://drive.google.com/file/d/1eJb5Oj8DOZtK3UTaAU3qpCOYQMxHQr02/view?usp=sharing',
		git:'https://github.com/ChiragKuikel/Lawyer-appointment'
	},
	{
		title: 'Weather App Homepage',
		description: 'A weather app with real-time data with a proxy server for API requests',
		image: '/weatherSS.png',
		tags: ['React', 'Node.js', 'Tailwind CSS', 'Express.js', 'MongoDB'],
		video:'https://drive.google.com/file/d/1CYHtLkfMrHC2Se2IALGZ1258IZFsy8b2/view?usp=sharing',
		git:'https://github.com/ChiragKuikel/WeatherApp'
	},

];

export default function ProjectsSection() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
					Featured Projects
				</motion.h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{projects.map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="group relative bg-gray-900/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-800"
						>
							<div className="aspect-video relative overflow-hidden">
								<Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105 " />
								<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent transition-transform duration-300 group-hover:scale-105" />
							</div>
							<div className="p-6">
								<h3 className="text-xl font-bold mb-2">{project.title}</h3>
								<p className="text-gray-400 mb-4">{project.description}</p>
									<div className="flex gap-4 mt-4">
										<a
											href={project.video}
											target="_blank"
											rel="noopener noreferrer"
											className="text-sm font-medium text-blue-400 hover:text-blue-300 transition"
										>
											🎥 Watch Demo
										</a>
										<a
											href={project.git}
											target="_blank"
											rel="noopener noreferrer"
											className="text-sm font-medium text-gray-400 hover:text-gray-200 transition"
										>
											💻 View Code
										</a>
										</div>
								<div className="flex flex-wrap gap-2 mt-4">
									{project.tags.map((tag, i) => (
										<span key={i} className="text-sm px-3 py-1 bg-gray-800 rounded-full">
											{tag}
										</span>
									))}
								</div>
							</div>
							
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
