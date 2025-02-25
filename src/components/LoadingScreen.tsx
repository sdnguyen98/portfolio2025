// src/components/LoadingScreen.tsx
import {TypingEffect} from "./typing-effect";

const LoadingScreen = () => {
    return (
      <div style={styles.loadingContainer}>
        <TypingEffect text="Software Engineer" />
      </div>
    );
  };
  
  const styles = {
    loadingContainer: {
      height: '100vh', // Full screen height
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '60px',
      color: 'white',
    },
  };
  
  export default LoadingScreen;
  