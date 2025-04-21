// src/components/LoadingScreen.tsx
import { motion } from "framer-motion";
import TypingEffect from "./TypingEffect";

const LoadingScreen = ({ isVisible }: { isVisible: boolean }) => {
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
      style={styles.loadingContainer}
      initial={{ opacity: 1 }} 
      animate={{ opacity: isVisible ? 1 : 0 }} 
      exit={{ opacity: 0 }} 
      transition={{ duration: 2.5 }} 
    >
      <TypingEffect text={randomGreeting} />
    </motion.div>
  );
};

const styles = {
  loadingContainer: {
    height: "100vh", 
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "60px",
    color: "white",
  },
};

export default LoadingScreen;
