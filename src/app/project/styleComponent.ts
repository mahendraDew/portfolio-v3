import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Styled components
export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  inset: 0;
  /* background: rgba(255, 0, 0, 0.2); // Optional background color */
  background: rgba(0, 0, 0, 0.2);
  height: 100vh;
  width: 100vw;
  z-index: 10;
`;

export const CardContainer = styled.div`
 position: fixed;
  inset: 0;
  display: grid;
  place-items: center;
  z-index: 100;
`;

export const CloseButton = styled(motion.button)`
  display: flex;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background-color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 9999px;
  height: 1.5rem;
  width: 1.5rem;
  justify-content: center;
  align-items: center;
`;

export const Card = styled(motion.div)`
  width: 100%;
  max-width: 500px;
  height: 100%;
  max-height: 80%;
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.267); // Glassmorphism effect
  backdrop-filter: blur(20px);
  border-radius: 1.5rem;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  -webkit-backdrop-filter: blur(10px);
  
  @media (max-width: 1024px) {
    max-width: 400px;
    max-height: 70%;
  }

  @media (max-width: 768px) {
    max-width: 300px;
    max-height: 60%;
  }

  @media (max-width: 480px) {
    max-width: 90%;
    max-height: 70%;
  }
`;

export const CardTags = styled.div`
    /* @media (max-width: 1024px) {
    padding: 0 10px;
  } */
  
  @media (max-width: 768px) {
    padding: 10px 0;
  }
  
  @media (max-width: 480px) {
    padding: 10px 0;
  }
`;

export const CardImage = styled(Image)`
  width: 100%;
  height: 20rem;
  object-fit: cover;
  object-position: top;
`;

export const CardContent = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const CardTitle = styled(motion.h3)`
  font-weight: bold;
  color: #d2d2d2;
  margin-bottom: 0.5rem;
`;

export const CardDescription = styled(motion.p)`
  color: #888;
`;

export const CardLink = styled(motion.a)`
  padding: 0.75rem;
  font-weight: bold;
  border-radius: 9999px;
  text-decoration: none;
`;

export const CardDetails = styled(motion.div)`
  padding: 1rem;
  color: #666;
  font-size: 0.875rem;
  line-height: 1.5;
  overflow-y: auto;
  max-height: 200px;
`;

export const CardList = styled.ul`
  width: 100%;
  display: flex;
  padding: 0 20px;
  flex-direction: column;
  gap: 1rem;
  
  @media (max-width: 600px) {
    padding: 0;
  }
`;

export const CardItem = styled(motion.div)`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #3838382f;
  cursor: pointer;
  border-radius: 0.75rem;
  &:hover {
    background-color: #6868682e;
  }
`;
