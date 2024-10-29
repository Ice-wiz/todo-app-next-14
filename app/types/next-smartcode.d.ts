declare module 'next-smartcode' {
    export interface VWOScriptProps {
        accountId: string;
        type?: string;
        settingsTimeout?: number;
        hideElement?: string;
        hideElementStyle?: string;
    }
    
    export function VWOScript(props: VWOScriptProps): JSX.Element;
} 