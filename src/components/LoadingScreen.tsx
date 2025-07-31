// src/components/LoadingScreen.tsx
import { motion } from "framer-motion";
import TypingEffect from "./TypingEffect";

const LoadingScreen = () => {
  const greeting = [
    "Hello",
    "Hola",
    "Bonjour",
    "Hallo",
    "Ciao",
    "Olá",
    "Привет",
    "你好",
    "こんにちは",
    "안녕하세요",
    "مرحبا",
    "नमस्ते",
    "Hujambo",
    "Merhaba",
    "Xin chào",
  ];
  const randomGreeting = greeting[Math.floor(Math.random() * greeting.length)];

  return (
    <motion.div
      className="fixed inset-0 w-screen h-screen flex items-center justify-center text-6xl text-white bg-black z-[9999]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <TypingEffect text={randomGreeting} />
    </motion.div>
  );
};

export default LoadingScreen;
