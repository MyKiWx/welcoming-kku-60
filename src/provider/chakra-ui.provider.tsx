"use client";

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import chakraui_theme from '@/styles/themes/chakraui-theme';

export function ChakraUiProvider({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <CacheProvider>
      <ChakraProvider theme={chakraui_theme}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}