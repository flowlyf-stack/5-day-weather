import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "Whats the weather in paris?",
    prompt: "Whats the weather in paris?",
    icon: "globe",
  },
  {
    label: "Whats the weather in London?",
    prompt: "Whats the weather in London?",
    icon: "globe",
  },
];

export const PLACEHOLDER_INPUT = "Tupe the city...";

export const GREETING = "Whats the weather like in your city?";

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 220,
      tint: 6,
      shade: theme === "dark" ? -1 : -4,
    },
    accent: {
      primary: theme === "dark" ? "#ebf38f" : "#ebf38f",
      level: 1,
    },
  },
  radius: "round",
  // Add other theme options here
  // chatkit.studio/playground to explore config options
});
