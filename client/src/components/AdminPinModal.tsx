import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useAdmin } from '@/contexts/AdminContext';
import { useLocation } from 'wouter';

interface AdminPinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AdminPinModal({ isOpen, onClose }: AdminPinModalProps) {
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAdmin();
  const [, setLocation] = useLocation();

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (pin.length !== 4) {
      setError('PIN must be 4 digits');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/admin/verify-pin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pin }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        login(data.token);
        onClose();
        setLocation('/admin');
      } else {
        setError(data.message || 'Invalid PIN');
        setPin('');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
      console.error('PIN verification error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 4);
    setPin(value);
    setError('');
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
      setPin('');
      setError('');
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="relative bg-white rounded-lg shadow-xl p-6 w-full max-w-sm mx-4">
        {/* Close button */}
        <button
          onClick={() => {
            onClose();
            setPin('');
            setError('');
          }}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          disabled={isLoading}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Admin Access</h2>
          <p className="text-gray-600 text-sm">Enter your 4-digit PIN</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="password"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={4}
              value={pin}
              onChange={handlePinChange}
              placeholder="••••"
              className="w-full px-4 py-3 text-center text-2xl tracking-widest border-2 border-gray-300 rounded-lg focus:border-[#0a3161] focus:ring-2 focus:ring-[#0a3161]/20 outline-none transition-colors"
              autoFocus
              disabled={isLoading}
            />
            {error && (
              <p className="mt-2 text-sm text-red-600 text-center">{error}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={pin.length !== 4 || isLoading}
            className="w-full bg-[#0a3161] text-white py-3 rounded-lg font-medium hover:bg-[#0a3161]/90 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? 'Verifying...' : 'Unlock'}
          </button>
        </form>
      </div>
    </div>
  );
}
