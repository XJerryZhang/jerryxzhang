"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu } from "@/components/ui/menu";
import { Footer } from "@/components/ui/footer";

const articles = [
  {
    title: "BREAKING: ‘I am in complete disbelief’: Arts faculty dean removed from her position",
    description: "Pamela Sugiman was removed as the Dean of Arts from TMU's administration.",
    image: "/article_covers/breaking_news.jpg",
    link: "https://theeyeopenertmu.com/2024/08/breaking-i-am-in-complete-disbelief-arts-faculty-dean-removed-from-her-position/",
  },
  {
    title: "Leaping lion: The art, tradition and future of lion dancing",
    description: "Rooted in martial arts and steeped in tradition, lion dancing bridges generations in Chinese culture.",
    image: "/article_covers/lion_dancing.jpg",
    link: "https://theeyeopenertmu.com/2025/01/leaping-lion-the-art-tradition-and-future-of-lion-dancing/",
  },
  {
    title: "Trump’s tariffs and annexation plans ignite debates within TMU community",
    description: "Experts and Students discuss Trump’s tariffs plan and Canada’s potential annexation.",
    image: "/article_covers/trump_tariffs.jpg",
    link: "https://theeyeopenertmu.com/2025/01/trumps-tariffs-and-annexation-plans-ignite-debates-within-tmu-community/",
  },
  {
    title: "Canada’s shifting immigration policies leave international students in ‘limbo’",
    description: "Experts and students raise concerns over the broader impact on their future.",
    image: "/article_covers/immigration_policies.jpg",
    link: "https://theeyeopenertmu.com/2024/09/canadas-shifting-immigration-policies-leave-international-students-in-limbo/",
  },
  {
    title: "New ‘Land Back’ course launches and memorial walk held on Truth and Reconciliation Day",
    description: "The Yellowhead Institute’s new course explores Indigenous land reclamation and is followed by a Memorial Walk at TMU.",
    image: "/article_covers/land_back.jpg",
    link: "https://theeyeopenertmu.com/2024/10/new-land-back-course-launches-and-memorial-walk-held-on-truth-and-reconciliation-day/",
  },
  {
    title: "Two attempted robberies within 24 hours leave three victims injured",
    description: "One student and two members of the public were assaulted during the robberies at TMU.",
    image: "/article_covers/robberies.jpg",
    link: "https://theeyeopenertmu.com/2024/10/two-attempted-robberies-within-24-hours-leave-three-victims-injured/",
  },
  {
    title: "My name: Defining my personas, defying conformity",
    description: "The history of Chinese culture using anglicized names is deeply rooted.",
    image: "/article_covers/name_identity.jpg",
    link: "https://theeyeopenertmu.com/2024/03/my-name-defining-my-personas-defying-conformity/",
  },
  {
    title: "Ex-ambassador to Israel calls for ‘two state solution’ regarding war in Gaza",
    description: "Jon Allen urges for understanding and historical context during discussion on the war between the State of Israel and Hamas.",
    image: "/article_covers/gaza_war.jpg",
    link: "https://theeyeopenertmu.com/2024/11/ex-ambassador-to-israel-calls-for-two-state-solution-regarding-war-in-gaza/",
  },
];

export function Writing() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center min-h-screen"
    >
      <header className="w-full">
        <Menu />
      </header>

      <section className="p-6 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-4"
        >
          Written Work
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6"
        >
          The following is a selection of my written work covering breaking news, cultural identity, and global issues, all published in{" "}
          <span className="italic">The Eyeopener</span>.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {articles.map((article, index) => (
            <motion.div
              key={index}
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="p-4 rounded-lg shadow-lg bg-white"
            >
              <Image
                src={article.image}
                alt={article.title}
                width={400}
                height={250}
                className="rounded-lg object-cover w-full h-40"
              />
              <h2 className="text-xl font-semibold mt-3">{article.title}</h2>
              <p className="mt-2">{article.description}</p>
              <Link href={article.link} className="text-[#8B0000] mt-3 inline-block hover:underline">
                Read More
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Footer />
    </motion.main>
  );
}
