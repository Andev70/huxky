import { c as create_ssr_component, a as add_attribute, g as escape, v as validate_component } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
import { l as logo } from "../../../chunks/logo_svg.js";
import { G as Button, I as Input } from "../../../chunks/input.js";
import "../../../chunks/Toaster.svelte_svelte_type_style_lang.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let formError = "";
  let emailError = "";
  let passwordError = "";
  let emailValue = "";
  let passwordValue = "";
  let isPending = false;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if (emailValue) emailError = "";
    }
    {
      if (passwordValue) passwordError = "";
    }
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-13xdd5b_START -->${$$result.title = `<title>Huxy | Login</title>`, ""}<meta name="description" content="login to access all the features of huxy"><meta name="keywords" content="login, huxy login, huxy-login, huxy"><!-- HEAD_svelte-13xdd5b_END -->`, ""} <div class="login flex h-dvh w-dvw items-center justify-center px-4"><form action="?/login" method="post" class="mx-auto flex w-full max-w-sm overflow-hidden rounded-lg border border-border bg-white drop-shadow-lg dark:bg-gray-800 lg:max-w-4xl"><div class="w-full px-6 pb-6 pt-3 md:px-8 lg:w-1/2"><div class="mx-auto flex items-center justify-center" data-svelte-h="svelte-w6rtfs"><img class="h-20 w-20"${add_attribute("src", logo, 0)} alt=""></div> <p class="text-center text-xl font-medium text-gray-600 dark:text-gray-200" data-svelte-h="svelte-1dun9ky">Please Sign in here</p> <p class="mt-3 text-center text-[14px] text-red-400">${escape(formError)}</p> ${validate_component(Button, "Button").$$render(
      $$result,
      {
        variant: "outline",
        class: "mt-4 flex w-full transform items-center justify-center rounded-lg border text-gray-600 transition-colors duration-300 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
      },
      {},
      {
        default: () => {
          return `<div class="px-4 py-2" data-svelte-h="svelte-bemrp"><svg class="h-6 w-6" viewBox="0 0 40 40"><path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107"></path><path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00"></path><path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50"></path><path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2"></path></svg></div> <span class="w-5/6 px-4 py-3 text-center font-bold" data-svelte-h="svelte-1781tjy">Sign in with Google</span>`;
        }
      }
    )} <div class="mt-4 flex items-center justify-between" data-svelte-h="svelte-12fglo1"><span class="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span> <a href="#email--form" class="text-center text-xs uppercase text-gray-500 hover:underline dark:text-gray-400">or login with email</a> <span class="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span></div> <div class="mt-4" id="email--form"><label class="mb-2 block text-sm font-medium text-gray-600 dark:text-gray-200" for="LoggingEmailAddress" data-svelte-h="svelte-1dm2p0m">Email Address</label> ${validate_component(Input, "Input").$$render(
      $$result,
      {
        placeholder: "Email Address",
        id: "LoggingEmailAddress",
        type: "email",
        name: "email",
        value: emailValue
      },
      {
        value: ($$value) => {
          emailValue = $$value;
          $$settled = false;
        }
      },
      {}
    )} <p class="mt-2 text-[13px] text-red-300">${escape(emailError ?? "")}</p></div> <div class="mt-4"><div class="flex justify-between" data-svelte-h="svelte-1akponu"><label class="mb-2 block text-sm font-medium text-gray-600 dark:text-gray-200" for="loggingPassword">Password</label> <a href="/reset/password" class="text-xs text-gray-500 hover:underline dark:text-gray-300">Forget Password?</a></div> ${validate_component(Input, "Input").$$render(
      $$result,
      {
        id: "loggingPassword",
        placeholder: "Enter password...",
        type: "password",
        name: "password",
        value: passwordValue
      },
      {
        value: ($$value) => {
          passwordValue = $$value;
          $$settled = false;
        }
      },
      {}
    )} <p class="mt-2 text-[13px] text-red-300">${escape(passwordError ?? "")}</p></div> <div class="mt-6">${validate_component(Button, "Button").$$render(
      $$result,
      {
        disabled: isPending,
        class: "w-full",
        type: "submit"
      },
      {},
      {
        default: () => {
          return `${`<span data-svelte-h="svelte-1xe6mu1">Create Folder</span>`}`;
        }
      }
    )}</div> <div class="mt-4 flex items-center justify-between" data-svelte-h="svelte-1lzmas7"><span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span> <a href="/signup" class="text-xs uppercase text-gray-500 hover:underline dark:text-gray-400">or sign up</a> <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span></div></div></form></div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
