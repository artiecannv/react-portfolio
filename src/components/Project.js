import React from "react";
import mock1 from "../assets/projects/mock1.png";
import mock2 from "../assets/projects/mock2.png";
import mock3 from "../assets/projects/mock3.png";
import mock4 from "../assets/projects/mock4.png";
import mock5 from "../assets/projects/mock5.png";

const Project = () => {
  return (
    <>
      <h2>Projects</h2>
      <section className="mockups inline-flex">
        <div class="flex justify-center">
          <div class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
            <a href="https://artiecannv.github.io/mark-me-in-the-middle/">
              <img
                class="rounded-t-lg"
                src={mock1}
                alt="mark-me-in-the-middle"
              />
            </a>
            <div class="p-6">
              <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Mark Me in the Middle
              </h5>
              <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                Input two addresses anywhere in the United States, and this application will automatically pinpoint a spot in the middle.
                The point in the middle will also show cool locations to meet up.
              </p>
              <button
                type="button"
                class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                GitHub Repo
              </button>
              <button
                type="button"
                class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Deployed Link
              </button>
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <div class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
            <a href="#!">
              <img class="rounded-t-lg" src={mock2} alt="the-table" />
            </a>
            <div class="p-6">
              <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                The Table
              </h5>
              <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button
                type="button"
                class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                GitHub Repo
              </button>
              <button
                type="button"
                class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Deployed Link
              </button>
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <div class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
            <a href="#!">
              <img class="rounded-t-lg" src={mock3} alt="coding-quiz" />
            </a>
            <div class="p-6">
              <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Coding Quiz
              </h5>
              <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button
                type="button"
                class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                GitHub Repo
              </button>
              <button
                type="button"
                class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Deployed Link
              </button>
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <div class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
            <a href="#!">
              <img class="rounded-t-lg " src={mock4} alt="employee-tracker" />
            </a>
            <div class="p-6">
              <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Employee Tracker
              </h5>
              <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button
                type="button"
                class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                GitHub Repo
              </button>
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <div class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
            <a href="#!">
              <img class="rounded-t-lg" src={mock5} alt="work-day-scheduler" />
            </a>
            <div class="p-6">
              <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Work Day Scheduler
              </h5>
              <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button
                type="button"
                class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                GitHub Repo
              </button>
              <button
                type="button"
                class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Deployed Link
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
