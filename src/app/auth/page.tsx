'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './auth.module.scss';
import { validatePhoneNumber } from '@/app/utils/validation';
import { useAuth } from '../context/authContext';
import Input from '../components/Input';
import Button from '../components/Buttton';

export default function AuthPage() {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validatePhoneNumber(phone);
    
    if (validationError) {
      setError(validationError);
      return;
    }
    
    setError('');
    setIsLoading(true);
    
    try {
      await login();
      router.push('/dashboard');
    } catch (err) {
      setError('Failed to login. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.authCard}>
        <h1 className={styles.title}>Welcome</h1>
        <p className={styles.subtitle}>Please enter your phone number</p>
        
        <form onSubmit={handleSubmit} className={styles.form}>
          <Input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="09123456789"
            label="Iranian Phone Number"
            error={error}
          />
          <Button 
            type="submit" 
            variant="primary" 
            isLoading={isLoading}
            className={styles.submitButton}
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}