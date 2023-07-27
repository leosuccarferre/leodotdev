"use client";

import Image from "next/image";
import { motion, useScroll } from "framer-motion";

import { RiPaintBrushFill, RiNodeTree } from "react-icons/ri";

// const { scrollYProgress } = useScroll();

export default function Home() {
  return (
    <main>
      <div className="container p-12 lg:p-24">
        <div className="mb-24 flex w-full flex-row items-center justify-between gap-4">
          <div className="flex flex-col">
            <h2 className={`text-2xl font-semibold text-stone-950`}>Leo</h2>
            <p className={`text-sm text-stone-500`}>Software Designer</p>
          </div>
          <div className="flex flex-row gap-4">
            <motion.a
              href="https://twitter.com/leosuccarferre"
              target="_blank"
              whileHover={{ scale: 1.25 }}
              whileTap={{ scale: 1 }}
              className="cursor-pointer rounded-full bg-stone-100 p-3 px-5 dark:bg-stone-800/30"
            >
              Twitter
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/leosuccarferre/"
              target="_blank"
              whileHover={{ scale: 1.25 }}
              whileTap={{ scale: 1 }}
              className="cursor-pointer rounded-full bg-stone-100 p-3 px-5 dark:bg-stone-800/30"
            >
              LinkedIn
            </motion.a>
          </div>
        </div>

        <div className="mb-24 flex flex-col gap-4">
          <motion.div
            whileHover={{ scale: 1.25 }}
            whileTap={{ scale: 1 }}
            className="flex cursor-pointer flex-row items-center gap-4 overflow-auto rounded-3xl bg-stone-100 p-8 transition-colors dark:border-stone-700 dark:bg-stone-800/30 lg:p-12"
          >
            {[
              ["/starterkit-2023-1.png", "Plasmic StarterKit"],
              ["/starterkit-2023-2.png", "Plasmic StarterKit"],
              ["/starterkit-2023-3.png", "Plasmic StarterKit"],
              ["/starterkit-2023-4.png", "Plasmic StarterKit"],
              ["/starterkit-2023-5.png", "Plasmic StarterKit"],
            ].map(([file, alt]) => (
              <Image
                className="rounded"
                src={file}
                alt={alt}
                width="800"
                height="600"
                objectFit="contain"
                priority
              />
            ))}
          </motion.div>
          <div className="flex flex-row items-center gap-3">
            <div className="rounded-full bg-stone-100 p-3 dark:bg-stone-800/30">
              <RiPaintBrushFill
                title="Visual Design"
                className="h-5 w-5 fill-stone-500"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold text-stone-950">
                StarterKit{" "}
              </h2>
              <p className="text-sm text-stone-500">Plasmic, 2023</p>
            </div>
          </div>
        </div>

        <div className="mb-24 flex flex-col gap-4">
          <motion.div
            whileHover={{ scale: 1.25 }}
            whileTap={{ scale: 1 }}
            className="flex cursor-pointer flex-row items-center justify-center gap-4 overflow-auto rounded-3xl bg-stone-100 p-8 transition-colors dark:border-stone-700 dark:bg-stone-800/30 lg:p-12"
          >
            {[["/field-states-2021.svg", "Plasmic Field States"]].map(
              ([file, name]) => (
                <Image
                  className="rounded"
                  src={file}
                  alt={name}
                  width="800"
                  height="600"
                  objectFit="contain"
                  priority
                />
              ),
            )}
          </motion.div>

          <div className="flex flex-row items-center gap-3">
            <div className="rounded-full bg-stone-100 p-3 dark:bg-stone-800/30">
              <RiNodeTree
                title="Visual Design"
                className="h-5 w-5 fill-stone-500"
              />
            </div>

            <div className="flex flex-col">
              <h2 className="text-xl font-semibold text-stone-950">
                Field States
              </h2>

              <p className="text-sm text-stone-500">Plasmic, 2021</p>
            </div>
          </div>
        </div>

        <div className="mb-24 flex flex-col gap-4">
          <motion.div
            whileHover={{ scale: 1.25 }}
            whileTap={{ scale: 1 }}
            className="flex cursor-pointer flex-row items-center justify-center gap-4 overflow-auto rounded-3xl bg-stone-100 p-8 transition-colors dark:border-stone-700 dark:bg-stone-800/30 lg:p-12"
          >
            {[["/variants-exploration-2021.svg", "Variants Panel"]].map(
              ([file, name]) => (
                <Image
                  className="rounded"
                  src={file}
                  alt={name}
                  width="800"
                  height="600"
                  objectFit="contain"
                  priority
                />
              ),
            )}
          </motion.div>

          <div className="flex flex-row items-center gap-3">
            <div className="rounded-full bg-stone-100 p-3 dark:bg-stone-800/30">
              <RiNodeTree
                title="Visual Design"
                className="h-5 w-5 fill-stone-500"
              />
            </div>

            <div className="flex flex-col">
              <h2 className="text-xl font-semibold text-stone-950">
                Variants Panel
              </h2>

              <p className="text-sm text-stone-500">Plasmic, 2021</p>
            </div>
          </div>
        </div>

        <div className="mb-24 flex flex-col gap-4">
          <motion.div
            whileHover={{ scale: 1.25 }}
            whileTap={{ scale: 1 }}
            className="flex cursor-pointer flex-row items-center justify-center gap-4 overflow-auto rounded-3xl bg-stone-100 p-8 transition-colors dark:border-stone-700 dark:bg-stone-800/30 lg:p-12"
          >
            {[["/chrome-wireframe-2023.svg", "Plasmic Variants Panel"]].map(
              ([file, name]) => (
                <Image
                  className="rounded"
                  src={file}
                  alt={name}
                  width="800"
                  height="600"
                  objectFit="contain"
                  priority
                />
              ),
            )}
          </motion.div>

          <div className="flex flex-row items-center gap-3">
            <div className="rounded-full bg-stone-100 p-3 dark:bg-stone-800/30">
              <RiNodeTree
                title="Visual Design"
                className="h-5 w-5 fill-stone-500"
              />
            </div>

            <div className="flex flex-col">
              <h2 className="text-xl font-semibold text-stone-950">
                Chrome Wireframe
              </h2>

              <p className="text-sm text-stone-500">Plasmic, 2023</p>
            </div>
          </div>
        </div>

        <div className="mb-24 flex flex-col gap-4">
          <motion.div
            whileHover={{ scale: 1.25 }}
            whileTap={{ scale: 1 }}
            className="flex cursor-pointer flex-row items-center gap-4 overflow-auto rounded-3xl bg-stone-100 p-8 transition-colors dark:border-stone-700 dark:bg-stone-800/30 lg:p-12"
          >
            {[
              ["/insert-menu-2023.svg", "Variants Panel"],
              ["/copilot-2023-1.png", "Plasmic Copilot"],
              ["/copilot-2023-2.png", "Plasmic Copilot"],
              ["/copilot-2023-3.png", "Plasmic Copilot"],
              ["/dashboard-2023-1.png", "Plasmic Dashboard"],
              ["/dashboard-2023-2.png", "Plasmic Dashboard"],
              ["/dashboard-2023-3.png", "Plasmic Dashboard"],
              ["/dashboard-2023-4.png", "Plasmic Dashboard"],
            ].map(([file, alt]) => (
              <Image
                className="rounded"
                src={file}
                alt={alt}
                width="800"
                height="600"
                objectFit="contain"
                priority
              />
            ))}
          </motion.div>
          <div className="flex flex-row items-center gap-3">
            <div className="rounded-full bg-stone-100 p-3 dark:bg-stone-800/30">
              <RiPaintBrushFill
                title="Visual Design"
                className="h-5 w-5 fill-stone-500"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold text-stone-950">
                Insert Menu, AI Copilot, Dashboard, Workspaces, Settings
              </h2>
              <p className="text-sm text-stone-500">Plasmic, 2023</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
