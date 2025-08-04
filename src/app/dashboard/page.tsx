'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './dashboard.module.scss';
import { useAuth } from '../context/authContext';
import Button from '../components/Buttton';

export default function DashboardPage() {
  const { user, isAuthenticated, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/auth');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className={styles.dashboardContainer}>
      <h1 className={styles.welcomeMessage}>
        Welcome to the Dashboard, {user?.name.first} {user?.name.last}!
      </h1>
      <div className={styles.userInfo}>
        <img 
          src={user?.picture.thumbnail} 
          alt="User thumbnail" 
          className={styles.userImage}
        />
        <p>Email: {user?.email}</p>
        <p>Phone: {user?.phone}</p>
              <Button onClick={logout}>logout</Button>
      </div>
    </div>
  );
}