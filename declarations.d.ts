declare module 'npm-next-smartcode' {
  export const VWOScript: React.ComponentType<{
    accountId: string;
    type?: string;
    settingsTimeout?: number;
    hideElement?: string;
    hideElementStyle?: string;
  }>;
} 