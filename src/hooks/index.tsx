// import { AuthProvider } from './Auth';
import { CounterProvider } from './Counter';

interface Props {
  children: React.ReactNode;
}

const AppProvider: React.FC<Props> = ({ children }: Props) => {
  return (
      <CounterProvider>{children}</CounterProvider>
  );
};

export default AppProvider;
