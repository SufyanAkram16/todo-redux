import store from "@/store/store.config";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store} >
      <ChakraProvider >
      <ColorModeScript initialColorMode="light" />
      <Component {...pageProps} />
    </ChakraProvider>
    </Provider>
    
  );
}
