export default AiModel = [
  {
    model: "GPT",
    icon: "/Ai-logos/gpt.png",
    premium: false,
    enable: true,
    subModel: [
      { name: "GPT 3.5", premium: false, id: "gpt-3.5" },
      { name: "GPT 3.5 Turbo", premium: false, id: "gpt-3.5-turbo" },
      { name: "GPT 4.1 Mini", premium: false, id: "gpt-4.1-mini" },
      { name: "GPT 4.1", premium: true, id: "gpt-4.1" },
      { name: "GPT 5 Nano", premium: false, id: "gpt-5-nano" },
      { name: "GPT 5 Mini", premium: false, id: "gpt-5-mini" },
      { name: "GPT 5", premium: true, id: "gpt-5" },
    ],
  },
  {
    model: "Gemini",
    icon: "/Ai-logos/gemini.png",
    premium: false,
    enable: true,
    subModel: [
      { name: "Gemini 1.5 Flash", premium: false, id: "gemini-1.5-flash" },
      { name: "Gemini 1.5 Pro", premium: true, id: "gemini-1.5-pro" },
      { name: "Gemini Ultra", premium: true, id: "gemini-ultra" },
    ],
  },
  {
    model: "DeepSeek",
    icon: "/Ai-logos/deepseek.png",
    premium: false,
    enable: true,
    subModel: [
      { name: "DeepSeek Chat", premium: false, id: "deepseek-chat" },
      { name: "DeepSeek Coder", premium: false, id: "deepseek-coder" },
      { name: "DeepSeek V3", premium: true, id: "deepseek-v3" },
    ],
  },
  {
    model: "Claude",
    icon: "/Ai-logos/llama.png",
    premium: false,
    enable: true,
    subModel: [
      { name: "Claude 3 Haiku", premium: false, id: "claude-haiku" },
      { name: "Claude 3 Sonnet", premium: true, id: "claude-sonnet" },
      { name: "Claude 3 Opus", premium: true, id: "claude-opus" },
    ],
  },
  {
    model: "Mistral",
    icon: "/Ai-logos/window.png",
    premium: false,
    enable: true,
    subModel: [
      { name: "Mistral Small", premium: false, id: "mistral-small" },
      { name: "Mistral Medium", premium: true, id: "mistral-medium" },
      { name: "Mistral Large", premium: true, id: "mistral-large" },
    ],
  },
];
