import React from 'react';
import styles from '@/styles/ResultBox.module.scss';

interface ResultBoxProps {
  children: React.ReactNode;
}

const ResultBox = ({ children }: ResultBoxProps) => {
  return <div className={styles.resultBox}>{children}</div>;
};

export default ResultBox;
