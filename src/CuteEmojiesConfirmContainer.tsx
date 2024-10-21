import * as React  from 'react'; 
import { YourDialog } from './Dialog';

export const ConfirmContext = React.createContext<(confirmation: string, options?: any) => Promise<boolean>>(() => Promise.resolve(false));

export const ConfirmContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [confirmation, setConfirmation] = React.useState<string>('');
  const [options, setOptions] = React.useState<any>({});
  const [resolver, setResolver] = React.useState<((value: boolean) => void) | null>(null);

  const confirm = React.useCallback((confirmation: string, options: any = {}) => {
    setConfirmation(confirmation);
    setOptions(options);
    setIsOpen(true);
    return new Promise<boolean>((resolve) => {
      setResolver(() => resolve);
    });
  }, []);

  const handleProceed = React.useCallback((result: boolean) => {
    setIsOpen(false);
    if (resolver) {
      resolver(result);
    }
  }, [resolver]);

  const contextValue = React.useMemo(() => confirm, [confirm]);

  return (
    <ConfirmContext.Provider value={contextValue}>
      {children}
      <YourDialog
        show={isOpen}
        proceed={handleProceed}
        confirmation={confirmation}
        options={options}
      />
    </ConfirmContext.Provider>
  );
};

export const useConfirm = () => React.useContext(ConfirmContext);