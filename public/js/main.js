/**
 * TurboCASH 6 - Main JavaScript
 * MIT License - Copyright (c) 2025 Philip Copeman
 */

'use strict';

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

/**
 * Initialize the application
 */
function initializeApp() {
  console.log('TurboCASH 6 - Initializing...');
  
  // Initialize components
  initializeMobileMenu();
  initializeQuickActions();
  initializeTooltips();
  
  console.log('TurboCASH 6 - Ready!');
}

/**
 * Initialize mobile menu toggle
 */
function initializeMobileMenu() {
  const menuToggle = document.querySelector('.header__menu-toggle');
  const sidebar = document.querySelector('.sidebar');
  
  if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', function() {
      sidebar.classList.toggle('is-open');
    });
    
    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(event) {
      const isClickInsideSidebar = sidebar.contains(event.target);
      const isClickOnToggle = menuToggle.contains(event.target);
      
      if (!isClickInsideSidebar && !isClickOnToggle && sidebar.classList.contains('is-open')) {
        sidebar.classList.remove('is-open');
      }
    });
  }
}

/**
 * Initialize quick action buttons
 */
function initializeQuickActions() {
  const quickActions = document.querySelectorAll('.quick-action');
  
  quickActions.forEach(function(action) {
    action.addEventListener('click', function() {
      const actionText = this.querySelector('.quick-action__text').textContent;
      showNotification('Feature Coming Soon', `${actionText} functionality will be available in the next release.`);
    });
  });
  
  // Initialize "New Transaction" button in page header
  const newTransactionBtn = document.querySelector('.btn--primary');
  if (newTransactionBtn) {
    newTransactionBtn.addEventListener('click', function() {
      showNotification('Coming Soon', 'Transaction entry form will be available in the next release.');
    });
  }
}

/**
 * Initialize tooltips (basic implementation)
 */
function initializeTooltips() {
  // Placeholder for tooltip functionality
  // Can be expanded with a tooltip library or custom implementation
  console.log('Tooltips initialized');
}

/**
 * Show a notification message
 * @param {string} title - Notification title
 * @param {string} message - Notification message
 * @param {string} type - Notification type (info, success, warning, danger)
 */
function showNotification(title, message, type = 'info') {
  // Remove any existing notifications
  const existingNotification = document.querySelector('.notification');
  if (existingNotification) {
    existingNotification.remove();
  }
  
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification--${type}`;
  notification.innerHTML = `
    <div class="notification__content">
      <strong class="notification__title">${title}</strong>
      <p class="notification__message">${message}</p>
    </div>
    <button class="notification__close" aria-label="Close notification">&times;</button>
  `;
  
  // Add styles for notification
  const style = document.createElement('style');
  style.textContent = `
    .notification {
      position: fixed;
      top: 90px;
      right: 20px;
      background: white;
      padding: 1rem 1.5rem;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      max-width: 400px;
      z-index: 2000;
      display: flex;
      gap: 1rem;
      align-items: start;
      animation: slideIn 0.3s ease;
      border-left: 4px solid #3498db;
    }
    
    .notification--success { border-left-color: #2ecc71; }
    .notification--warning { border-left-color: #f39c12; }
    .notification--danger { border-left-color: #e74c3c; }
    
    .notification__content {
      flex: 1;
    }
    
    .notification__title {
      display: block;
      margin-bottom: 0.25rem;
      color: #2c3e50;
    }
    
    .notification__message {
      margin: 0;
      font-size: 0.875rem;
      color: #7f8c8d;
    }
    
    .notification__close {
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: #95a5a6;
      padding: 0;
      line-height: 1;
      transition: color 0.3s ease;
    }
    
    .notification__close:hover {
      color: #e74c3c;
    }
    
    @keyframes slideIn {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    
    @media (max-width: 480px) {
      .notification {
        left: 10px;
        right: 10px;
        max-width: none;
      }
    }
  `;
  
  if (!document.querySelector('style[data-notification-styles]')) {
    style.setAttribute('data-notification-styles', '');
    document.head.appendChild(style);
  }
  
  // Add to document
  document.body.appendChild(notification);
  
  // Close button functionality
  const closeBtn = notification.querySelector('.notification__close');
  closeBtn.addEventListener('click', function() {
    notification.remove();
  });
  
  // Auto-remove after 5 seconds
  setTimeout(function() {
    if (notification.parentElement) {
      notification.remove();
    }
  }, 5000);
}

/**
 * Format currency value
 * @param {number} amount - Amount to format
 * @param {string} currency - Currency code (default: USD)
 * @returns {string} Formatted currency string
 */
function formatCurrency(amount, currency = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency
  }).format(amount);
}

/**
 * Format date
 * @param {Date|string} date - Date to format
 * @returns {string} Formatted date string
 */
function formatDate(date) {
  const d = new Date(date);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }).format(d);
}

/**
 * Validate form input
 * @param {HTMLInputElement} input - Input element to validate
 * @returns {boolean} True if valid, false otherwise
 */
function validateInput(input) {
  const value = input.value.trim();
  const type = input.type;
  
  if (input.hasAttribute('required') && !value) {
    return false;
  }
  
  if (type === 'email' && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  }
  
  if (type === 'number' && value) {
    return !isNaN(value) && isFinite(value);
  }
  
  return true;
}

/**
 * Debounce function to limit how often a function can fire
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
function debounce(func, wait = 300) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Export utilities for use in other modules
window.TurboCASH = {
  formatCurrency,
  formatDate,
  validateInput,
  debounce,
  showNotification
};
